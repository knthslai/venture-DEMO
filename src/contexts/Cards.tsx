import { createContext, PropsWithChildren, useState } from 'react';

export const CardContext = createContext({
  cards: [],
  setCards: (cards) => {}
});

export default function CardContextProvider({
  children
}: PropsWithChildren<{}>) {
  const [cards, setCards] = useState([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
}
