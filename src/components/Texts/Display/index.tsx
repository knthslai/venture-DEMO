import styled from 'styled-components';
import { maxMedia } from '../../../utils';

export const Display = styled.text`
  font-size: 72px;
  line-height: 76px;
  letter: -2.8px;
  ${maxMedia.laptop} {
    font-size: 44px;
    line-height: 48px;
  }
`;
