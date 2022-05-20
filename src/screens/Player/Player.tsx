import { useContext, useEffect, useRef, useState } from 'react';
import { Dock } from './Dock';
import { Nav } from './Nav';
import { Chat } from './Chat';
import {
  Page,
  PlayArea,
  CardArea,
  CardColumn,
  ResponseInput
} from './Player.parts';
import { PathContext } from '../../contexts/Path';
import { Grid } from './Grid';

export default function Player() {
  const InputRef = useRef<any>();
  const TopRef = useRef<any>();
  const { path, setPath } = useContext(PathContext);
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  useEffect(() => {
    setTimeout(() => {
      if (path === 'input') if (InputRef.current) InputRef.current.focus();
    }, 1000);
  }, [path]);
  return (
    <Page>
      <PlayArea>
        {path.includes('tutorial') && <Grid />}
        <Chat />
      </PlayArea>
      <div style={{ height: 50 }} />
      <CardArea>
        <CardColumn className='animate fadein'>
          {path.includes('get_') && (
            <ResponseInput
              onEnter={() => {
                const [cat, subcat] = path.split(':');
                setPath(`${cat}:got_${subcat.split('_')[1]}`, value);
                setValue('');
              }}
              InputRef={InputRef}
              className={`animate fadein`}
              value={value}
              onChange={handleInputChange}
            />
          )}
          {!path.includes('get_') && (
            <Dock TopRef={TopRef} className={`animate fadein`} />
          )}
          <Nav scrollRef={TopRef} />
        </CardColumn>
      </CardArea>
    </Page>
  );
}
