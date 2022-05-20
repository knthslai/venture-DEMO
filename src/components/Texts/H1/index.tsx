import styled from 'styled-components';
import { maxMedia } from '../../../utils';

export const H1 = styled.text`
  font-size: 44px;
  line-height: 52px;
  letter: -1.4px;
  ${maxMedia.laptop} {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.8px;
  }
`;
