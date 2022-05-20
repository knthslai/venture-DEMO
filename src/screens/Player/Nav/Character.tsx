import styled from 'styled-components';
import { BodyText, Button, Column, Container } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { maxMedia } from '../../../utils';
import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../../contexts/Cards';
import { CharacterContext } from '../../../contexts/Character';
import { PathContext } from '../../../contexts/Path';
import { AuthContext } from '../../../contexts/Auth';
import { DBContext } from '../../../contexts/DB';
import { keys, sortBy } from 'lodash';
import { TwoShadowsSVG } from '../../../assets/icons';
import { effectiveness } from '../../../cards';
import * as stats from '../../../cards/checks';

const CharContainer = styled(Container)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0;
  padding-top: 4px;
  position: relative;
  top: -396px;
  left: -9px;
  width: 83px;
  justify-content: center;
  text {
    line-height: 18px;
  }
  ${maxMedia.tablet} {
    top: -396px;
    left: -9px;
  }
  ${({ isSelected }) => (isSelected ? 'border-bottom: none;' : '')}
`;

export const Character = ({ className }) => {
  const { path, setPath } = useContext(PathContext);
  const { setCards } = useContext(CardContext);
  const { currentUser } = useContext(AuthContext);
  const { Characters, Users } = useContext(DBContext);
  const { setSelected } = useContext(CharacterContext);
  const CreateCard = {
    title: 'Create a character',
    SVGIcon: TwoShadowsSVG,
    rarity: 'yellowgold',
    noMargin: true,
    back: ['- Build a character to play in a campaign'],
    onClick: () => {
      setPath('create_character:start');
      setCards([]);
    }
  };
  const [characterCards, setCharacterCards] = useState<any[]>([CreateCard]);
  useEffect(() => {
    if (currentUser)
      if (currentUser.characters)
        if (currentUser.characters.length) {
          Characters.getAllById(currentUser.characters).then((r) => {
            const newCards = [
              CreateCard,
              ...sortBy(r, ['created']).map((c) => ({
                title: c.name,
                SVGIcon: c.picture,
                classType: c.classType,
                stats: c.stats,
                noMargin: true,
                option: {
                  text: 'Delete',
                  body: 'Are you sure you want to delete this character?',
                  onSubmit: () => {
                    Users.update(currentUser.email, {
                      characters: [
                        ...currentUser.characters.filter(
                          (id) => id != c.docRef.id
                        )
                      ]
                    }).then(Characters.delete(c.docRef.id));
                  }
                },
                onClick: () => {
                  // if (r.length) {
                  //   setPath(
                  //     'selected_character',
                  //     `${c.name} the ${c.classType}`
                  //   );
                  // } else {
                  setPath('tutorial:start');
                  // }
                  setSelected({
                    ...c,
                    onClick: () =>
                      setCards(
                        stats.stats.map((k) =>
                          stats[k](c.stats[k], () => effectiveness(c.stats[k]))
                        )
                      )
                  });
                  setCards([]);
                }
              }))
            ];
            setCharacterCards(newCards);
            if (path === 'pick_character') setCards(newCards);
          });

          return;
        }
    if (path === 'pick_character') setCards([CreateCard]);
  }, [currentUser]);
  const handleClick = () => setCards(characterCards);

  return (
    <CharContainer isSelected={path === 'pick_character'} className={className}>
      <Button style={{ margin: 0, padding: 0 }} onClick={handleClick}>
        <Column>
          <FontAwesomeIcon icon={faUserAstronaut} fontSize={24} fixedWidth />
          <BodyText>Character</BodyText>
        </Column>
      </Button>
    </CharContainer>
  );
};
