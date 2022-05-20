import { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '..';
import { TitleContainer } from '../../App.parts';
import { SceneContext } from '../../contexts/Scene';
import { maxMedia } from '../../utils';

const Text = styled.text`
  border-radius: 9px;
  overflow: hidden;
  padding: 0 14px;
  font-size: 84px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  ${maxMedia.tablet} {
    font-size: 18vw;
  }
`;

export const Title = () => {
  const { bg } = useContext(SceneContext);
  return (
    <Overlay>
      <TitleContainer bg={`url(${bg})`}>
        <Text>VENTURE</Text>
      </TitleContainer>
    </Overlay>
  );
};
