import styled from 'styled-components';

export const Detail = styled.text`
  font-style: ${({ mode }) => mode || 'normal'};
  font-size: 14px;
  line-height: 20px;
  letter: 0px;
`;
