import { useContext } from 'react';
import styled from 'styled-components';
import { Flex, Row } from '../../../components';
import { CharacterContext } from '../../../contexts/Character';
import { PathContext } from '../../../contexts/Path';
import { useWindowSize } from '../../../helpers';
import { maxMedia } from '../../../utils';
import { Character } from './Character';
import { Tabs } from './Tabs';

const Container = styled(Row)`
  width: 100%;
  height: 0;
  ${maxMedia.tablet} {
    height: 59px;
    width: auto;
    justify-content: flex-start;
  }
`;

export const Nav = ({ scrollRef }: { scrollRef: any }) => {
  const { isTablet } = useWindowSize();
  const { selectedCharacter } = useContext(CharacterContext);
  const { path } = useContext(PathContext);
  return (
    <Container className='animate fadein'>
      {path === 'pick_character' && <Character className='animate fadein' />}
      {!isTablet && <Flex style={{ flex: 2 }} />}
      {!!selectedCharacter && (
        <Tabs scrollRef={scrollRef} className='animate fadein' />
      )}
    </Container>
  );
};
