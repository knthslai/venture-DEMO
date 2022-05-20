import styled from 'styled-components';
import { Button, Column } from './components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeXmark,
  faVolumeHigh,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import ReactAudioPlayer from 'react-audio-player';
import { useContext } from 'react';
import './styles.css';
import { SceneContext } from './contexts/Scene';
import { maxMedia } from './utils';
import { useHistory, useLocation } from 'react-router-dom';

export const MenuButton = styled((props) => <Button {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  svg {
    margin-right: 12px;
  }
  :first-child {
    margin-top: 32px;
  }
`;

export const TitleContainer = styled.div`
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes floattitle {
    0% {
      background-position-x: 20%;
    }
    50% {
      background-position-x: 80%;
    }
    100% {
      background-position-x: 20%;
    }
  }
  @keyframes floattitlemobile {
    0% {
      background-position-x: 1.5%;
    }
    50% {
      background-position-x: 98.5%;
    }
    100% {
      background-position-x: 1.5%;
    }
  }
  display: flex;
  position: absolute;
  z-index: 10;
  margin-bottom: 35vh;
  border-radius: 10px;
  overflow: hidden;
  padding: 6px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -50%;
    top: -150%;
    width: 200%;
    height: 400%;

    transform: rotate(-45deg);
    background: linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #fff 55%,
      #fff 65%,
      transparent 70%,
      transparent 100%
    );
    background-size: 145% auto;
    animation: shine 4s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: ${({ bg }) => bg};
    filter: blur(3px);
    -webkit-filter: blur(3px);
    animation: floattitle 60s ease infinite;
    background-position: 50% -26.5vh;
    ${maxMedia.tablet} {
      animation: floattitlemobile 60s ease infinite;
      background-position: 50% -26.66vh;
    }
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: auto 100vh; /* Resize the background image to cover the entire container */
    font-size: calc(10px + 2vmin);
    color: white;
    border-radius: 10px;
  }

  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    50% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

const BG = styled.div`
  text-align: center;
  background-color: #000;
  animation: float 60s ease infinite;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto 100vh; /* Resize the background image to cover the entire container */
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  min-width: 100vw;
  @keyframes float {
    0% {
      background-position-x: left;
    }
    50% {
      background-position-x: right;
    }
    100% {
      background-position-x: left;
    }
  }
`;
const MuteButton = styled.button`
  position: absolute;
  z-index: 10;
  background: none;
  border: none;
  top: 16px;
  right: 16px;
`;

const BackButton = styled.button`
  position: absolute;
  z-index: 10;
  background: none;
  border: none;
  top: 16px;
  left: 16px;
`;
export const Scene = ({ children, style = {} }) => {
  const { bg, sound, mute, setMute, goBack, isLoading } =
    useContext(SceneContext);
  const { pathname } = useLocation();
  return (
    <BG
      style={{
        ...style,
        backgroundImage: `url(${bg})`,
        overflow: 'hidden'
      }}
    >
      {!mute && <ReactAudioPlayer src={sound} autoPlay loop />}
      <MuteButton onClick={() => setMute(!mute)}>
        <FontAwesomeIcon
          icon={!mute ? faVolumeHigh : faVolumeXmark}
          size='1x'
          inverse
        />
      </MuteButton>
      {pathname != '/' && !isLoading && (
        <BackButton onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} size='1x' inverse />
        </BackButton>
      )}
      {children}
    </BG>
  );
};

export const Transition = (props) => {
  const { stage } = useContext(SceneContext);

  return <Column {...props} style={{ width: '100vw' }} className={stage} />;
};