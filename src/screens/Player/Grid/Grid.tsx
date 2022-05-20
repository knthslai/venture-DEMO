import { useContext, useEffect } from 'react';
import { Column, H1, Row } from '../../../components';
import { GridContext } from '../../../contexts/Grid';
import { randomInt } from '../../../utils';
import { GridContainer, Tile } from './Grid.parts';

export const Grid = () => {
  // TODO: grid class
  const { Grid, setGrid } = useContext(GridContext);

  useEffect(() => {
    const newGrid = [...Array(5)].map(() => [...Array(5)]);
    [
      { type: 'item' },
      { type: 'item', opened: true },
      { type: 'monster' },
      { type: 'trap' },
      { type: 'door' },
      { type: 'trap', hidden: true }
    ].forEach((tile) => {
      getEmpty(tile);
    });
    function getEmpty(item) {
      const x = randomInt(newGrid.length - 1);
      const y = randomInt(newGrid[0].length - 1);
      if (!newGrid[x][y]) {
        newGrid[x][y] = item;
        return newGrid[x][y];
      } else return getEmpty(item);
    }
    setGrid(newGrid);
  }, []);

  return (
    <GridContainer>
      <Column>
        {Grid.map((row, rowIdx) => (
          <Row style={{}} key={'row' + rowIdx}>
            {row.map((props, colIdx) => (
              <Tile
                key={'tile' + rowIdx + colIdx}
                {...props}
                coords={[rowIdx, colIdx]}
              />
            ))}
          </Row>
        ))}
      </Column>
    </GridContainer>
  );
};
