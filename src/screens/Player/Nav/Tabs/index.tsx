import { useContext, useEffect, useState } from 'react';
import { BodyText, Column } from '../../../../components';
import { CardContext } from '../../../../contexts/Cards';
import { options, Tab, Container } from './Tabs.parts';

export const Tabs = ({ scrollRef, className }) => {
  const { cards, setCards } = useContext(CardContext);
  const [selected, setSelected] = useState(0);

  const handleClick = (idx: number, options: any[]) => {
    if (scrollRef.current.scrollIntoView)
      setTimeout(() => {
        scrollRef.current.scrollIntoView();
      });
    setSelected(idx);
    setCards(options);
  };
  useEffect(() => {
    if (cards.length === 0) handleClick(0, options[0].cards);
  }, []);
  return (
    <Container className={className}>
      {options.map(({ title, SVG, cards }, idx) => (
        <Tab
          key={title + idx}
          selected={selected === idx}
          onClick={() => handleClick(idx, cards)}
        >
          <Column>
            <div style={{ height: 32, width: 32 }}>
              <SVG />
            </div>
            <BodyText fontStyle='bold'>{title}</BodyText>
          </Column>
        </Tab>
      ))}
    </Container>
  );
};
