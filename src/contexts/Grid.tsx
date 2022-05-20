import { createContext, PropsWithChildren, useState } from 'react';

export const GridContext = createContext({
  Grid: [[]],
  setGrid: (Grid) => {}
});

export default function GridContextProvider({
  children
}: PropsWithChildren<{}>) {
  const [Grid, setGrid] = useState([[]]);

  return (
    <GridContext.Provider value={{ Grid, setGrid }}>
      {children}
    </GridContext.Provider>
  );
}
