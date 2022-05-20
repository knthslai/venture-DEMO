import { uniq } from 'lodash';
import { EmbrassedEnergySVG, ReadSVG } from '../assets';
import { portraits } from '../assets/portraits/player';
import * as classes from '../cards/classes';
import { uuidv4 } from '../helpers';

export const tutorial = (
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
    currentUser,
    setPath
  }
) => {
  const insertMessages = (newMessages: any[]) =>
    setMessages(uniq([...messages, ...newMessages]));
  const id = uuidv4();
  switch (path) {
    case 'start':
      insertMessages([
        {
          text: 'Seems like it is the first time playing, would you like to...'
        }
      ]);
      setCards([
        {
          title: 'Run the tutorial',
          SVGIcon: ReadSVG,
          rarity: 'yellowgold',
          noMargin: true,
          back: [
            'Quick overview of how to interact with:',
            '- Cards',
            '- Grid',
            '- Checks',
            '- Items'
          ],
          onClick: () => {
            setThePath('tutorial:begin');
            setCards([]);
          }
        },
        {
          title: 'Join the game',
          SVGIcon: EmbrassedEnergySVG,
          rarity: 'platinum',
          noMargin: true,
          onClick: () => {
            setPath('selected_character', 'Joining game ...');
            setCards([]);
          }
        }
      ]);

      break;
    case 'begin':
      clearMessages("Great! Let's begin ...");
      console.log('Start  creating tutorial here');
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
