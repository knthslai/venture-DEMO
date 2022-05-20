import styled from 'styled-components';
import { maxMedia } from '../../utils';
import * as Components from '../../components';
import { Input } from '@chakra-ui/react';
import { BodyText, Row } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DialogContextProvider from '../../contexts/Dialogue';
import PathContextProvider from '../../contexts/Path';
import CardContextProvider from '../../contexts/Cards';
import CharacterContextProvider from '../../contexts/Character';
import GridContextProvider from '../../contexts/Grid';

export const Page = styled(Components.Column)`
  width: 100%;
  height: 100vh;
  color: #fff;
  padding: 16px;
`;

export const CardArea = styled(Components.Container)`
  padding: 0;
  min-height: 320px;
  width: 90vw;
  ${maxMedia.tablet} {
    min-height: 320px;
    width: 96vw;
    margin: 0 8px;
  }
`;

export const PlayArea = styled(Components.Column)`
  height: calc(100% - 462px);
`;

export const CardColumn = styled(Components.Column)`
  margin: 0;
  width: 100%;
  ${maxMedia.tablet} {
    align-items: flex-start;
  }
`;

export const ResponseInput = ({
  value,
  onChange,
  className,
  InputRef,
  onEnter
}) => {
  const [show, setShow] = useState(false);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };
  return (
    <Row
      style={{
        width: '100%',
        flexWrap: 'nowrap',
        height: '100%'
      }}
      className={className}
    >
      <Input
        ref={InputRef}
        style={{
          width: '40%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 8,
          paddingLeft: 32,
          border: '2px solid #fff',
          borderRadius: 50,
          marginLeft: 100
        }}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        onChangeCapture={() => setTimeout(() => setShow(true), 1000)}
        placeholder='Respond Here'
        type='unstyled'
        size='xl'
        resize={'none'}
        border='none'
      />
      <FontAwesomeIcon
        icon={faFeatherPointed}
        size='1x'
        inverse
        style={{ position: 'relative', right: 60 }}
        className='float'
      />
      <BodyText
        style={{ position: 'relative', bottom: -48, right: '29%' }}
        className={`animate ${show ? 'fadeInOut' : 'fadeout'}`}
      >
        Press Enter
      </BodyText>
    </Row>
  );
};

export const PlayerProviders = ({ children }) => (
  <GridContextProvider>
    <DialogContextProvider>
      <CardContextProvider>
        <PathContextProvider>
          <CharacterContextProvider>{children}</CharacterContextProvider>
        </PathContextProvider>
      </CardContextProvider>
    </DialogContextProvider>
  </GridContextProvider>
);