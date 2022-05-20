import { useState, useRef, useEffect, useContext } from 'react';

import { Card, CardProps, CardOverlay, Row } from '../../../components';
import { CardContext } from '../../../contexts/Cards';
import { CharacterContext } from '../../../contexts/Character';
import { useWindowSize } from '../../../helpers';
import { CardContainer, DockContainer, ScrollContainer } from './Dock.parts';

export const Dock = ({
  TopRef,
  className
}: {
  TopRef: any;
  className: string;
}) => {
  const { selectedCharacter } = useContext(CharacterContext);
  const { cards } = useContext(CardContext);
  const { width } = useWindowSize();
  const currTimeout = useRef<{ ref?: number }>({}).current;
  const [preselected, setPreselected] = useState<number | boolean>(false);
  const [selected, setSelected] = useState<
    { card?: CardProps; idx: number; diceRoll?: any } | boolean
  >(false);
  const [currCards, setCurrCards] = useState<any[]>([]);
  const [direction, setDirection] = useState<string | boolean>('in');
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    setDirection('out');
    setSelected(false);
    if (currTimeout.ref) window.clearTimeout(currTimeout.ref);
    currTimeout.ref = window.setTimeout(() => {
      setCurrCards(cards);
      setDirection('in');
      currTimeout.ref = window.setTimeout(() => {
        setDirection(false);
        currTimeout.ref = 0;
      }, 600);
    }, 600);
  }, [cards]);
  return (
    <DockContainer total={cards.length} className={className}>
      <CardOverlay
        card={typeof selected == 'object' ? selected.card : undefined}
        className={`animate fade${isViewing ? 'in' : 'out'}`}
        selected={selected}
        onClick={() => {
          setIsViewing(false);
          setTimeout(() => {
            setSelected(false);
            setPreselected(false);
          }, 200);
        }}
      />
      {typeof selectedCharacter === 'object' && (
        <Card
          className='animate cardIn'
          {...selectedCharacter}
          title={selectedCharacter.name}
          SVGIcon={selectedCharacter.picture}
          classType={selectedCharacter.classType}
          style={{ marginLeft: 12 }}
        />
      )}
      <CardContainer selectedCharacter={typeof selectedCharacter === 'object'}>
        <ScrollContainer ref={TopRef} />
        {currCards.map((card, idx) => {
          const { title } = card;
          let key = title || 'card';
          return (
            <Card
              key={key + idx}
              {...card}
              idx={idx}
              className={`animate
                ${direction ? `card${direction}` : `stay`}
                ${
                  typeof selected === 'object' && selected.idx === idx
                    ? 'cardup'
                    : 'carddown fadein'
                }`}
              onClick={(e: any) => {
                e.currentTarget.scrollIntoView({ behavior: 'smooth' });
                if (
                  width <= 768 &&
                  (preselected === false || preselected !== idx)
                )
                  setPreselected(idx);
                else {
                  setSelected({ card, idx });
                  setIsViewing(true);
                }
              }}
            />
          );
        })}
      </CardContainer>
    </DockContainer>
  );
};
