import styled from 'styled-components';
import {
  BoxTrapSVG,
  DoorwaySVG,
  GooeyDaemonSVG,
  LockedChestSVG,
  OpenChestSVG,
  PerspectiveDiceSixFacesRandomSVG,
  TrapMaskSVG
} from '../../../assets';
import { BodyText, Column, Container } from '../../../components';

export const GridContainer = styled(Container)`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
`;

const TileContainer = styled.button`
  width: 75px;
  height: 75px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Icon = ({ type, opened, hidden }) => {
  let SVGIcon = PerspectiveDiceSixFacesRandomSVG;
  if (!hidden)
    switch (type) {
      case 'door':
        SVGIcon = DoorwaySVG;
        break;
      case 'trap':
        SVGIcon = BoxTrapSVG;
        break;
      case 'item':
        SVGIcon = opened ? OpenChestSVG : LockedChestSVG;
        break;
      case 'monster':
        SVGIcon = GooeyDaemonSVG;
        break;
    }
  return (
    <div style={{ width: 65, height: 65 }}>
      <SVGIcon />
    </div>
  );
};

export const Tile = (props) => {
  return (
    <TileContainer>
      <Column>{!!props.type && <>{Icon(props)}</>}</Column>
    </TileContainer>
  );
};
