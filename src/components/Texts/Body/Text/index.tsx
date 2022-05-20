import styled from 'styled-components';

export const BodyText = styled.text`
  font-style: ${({ type }) => type || 'normal'};
  font-size: 16px;
  line-height: 19px;
`;
