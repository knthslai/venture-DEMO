import styled from 'styled-components';
import { Button } from '../../components';

export const MenuButton = styled((props) => <Button {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  svg {
    margin-right: 12px;
  }
`;