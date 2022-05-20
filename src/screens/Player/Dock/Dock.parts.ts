import styled from 'styled-components';
import { Row } from '../../../components';
import { maxMedia, minMedia } from '../../../utils';

export const CardContainer = styled(Row)`
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 14px;
  min-height: 320px;
  ${({ selectedCharacter }) =>
    selectedCharacter
      ? 'padding-left: 8px; border-left: solid 3px rgba(255, 255, 255, 0.3); margin-left: 18px;'
      : ''}

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .flip-card:hover:not(.card-no-margin) ~ .flip-card {
    position: relative;
    transition: transform 0.4s;
    transition: 0.4s ease-out;
    transform: translateX(70px);
  }
  .flip-card:not(:nth-child(2)):not(.card-no-margin) {
    margin-left: -60px;
  }
  .card-no-margin {
    margin-right: 16px;
  }
  ${maxMedia.tablet} {
    padding: 24px 0 8px 0;
    width: 90vw;
    border-bottom: solid 2px;
  }
`;

export const DockContainer = styled(Row)`
  width: 90vw;
  flex-wrap: nowrap;
  padding: 0 0 0 18px;
`;

export const ScrollContainer = styled.div`
  width: 14px;
`;
