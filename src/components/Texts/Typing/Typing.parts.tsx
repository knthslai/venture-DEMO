import styled from 'styled-components';
import * as Components from '../../';
import { maxMedia, minMedia } from '../../../utils';

export const FromTab = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 16px;
  padding: 0 8px;
  border: solid 2px #fff;
  border-bottom: none;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  line-height: 41px;
  top: -57px;
  left: 10px;
  width: fit-content;
  height: fit-content;
`;

export const ScrollContainer = styled.div`
  width: 14px;
`;

export const Column = styled(Components.Column)`
  width: 100vw;
  overflow: hidden;
  justify-content: flex-end;
  height: 100%;
  .chatIn {
    animation: 0.5s chatIn;
  }
  .chatOut {
    opacity: 0.75 !important;
    ${minMedia.tablet} {
      transform: translateX(-${({ width }) => width * 0.33}px) scale(0.6);
    }
    ${maxMedia.tablet} {
      transform: translateX(-${({ width }) => width * 0.2}px) scale(0.6);
    }
  }

  @keyframes chatIn {
    from {
      margin: 0;
      padding: 0;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
    to {
      opacity: 1;
      max-height: 400px;
      margin-top: 60px;
    }
  }
`;
