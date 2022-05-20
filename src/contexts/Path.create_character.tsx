import { uniq } from 'lodash';
import { portraits } from '../assets/portraits/player';
import * as classes from '../cards/classes';
import { uuidv4 } from '../helpers';

export const create_character = (
  path,
  {
    vm,
    setCards,
    messages,
    setMessages,
    clearMessages,
    setThePath,
    Users,
    Characters,
    currentUser
  }
) => {
  const insertMessages = (newMessages: any[]) =>
    setMessages(uniq([...messages, ...newMessages]));
  const id = uuidv4();
  switch (path) {
    case 'start':
      insertMessages([
        {
          text: 'Excellent! Begin with a name',
          timedOutCursor: true
        }
      ]);
      setThePath('create_character:get_name');
      break;
    case 'got_name':
      vm.name = vm.payload;
      insertMessages([`A face for ${vm.name}`]);
      setCards(
        portraits.map((image) => ({
          SVGIcon: image,
          onClick: () => {
            setCards([]);
            vm.picture = image;
            setThePath('create_character:got_image');
          }
        }))
      );
      break;
    case 'got_image':
      const onClick = (type) => () => {
        vm.classType = type;
        vm.stats = classes[type].initialStats;
        setCards([]);
        setThePath('create_character:save');
      };
      insertMessages([`Weapon of choice?`]);
      setCards(
        classes.classesList.map((item) => ({
          ...item,
          onClick: onClick(item.title)
        }))
      );
      break;
    case 'save':
      setMessages(['Saving...']);
      try {
        Characters.create(id, vm)
          .then(() =>
            Users.update(currentUser.email, {
              characters: [...(currentUser.characters || []), id]
            })
          )
          .then(() => {
            clearMessages('Please select a character to get started');
            setThePath('pick_character');
          });
      } catch (error) {
        console.log(
          '🚀 ~ file: Path.create_character.tsx ~ line 127 ~ error',
          error
        );
      }

      break;
    default:
      break;
  }
};
