import { Container } from '@chakra-ui/layout';
import { ResizeContext } from '../../contexts/Resize';
import React, {
  PropsWithChildren,
  ReactChildren,
  useContext,
  useEffect,
  useState
} from 'react';

interface VisualStateProps {
  children?: any;
  key?: string;
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

function ResponsiveWindowSetup(props: VisualStateProps) {
  const { width, isMobile, isTablet, isDesktop } = useContext(ResizeContext);
  const [displayState, setdisplayState] = useState({
    isMobile,
    isTablet,
    isDesktop
  });
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    setTimeout(() => {
      setdisplayState({ isMobile, isTablet, isDesktop });
      setDisplay(transitionStage === 'fadeOut' ? 'none' : 'flex');
    }, 300);
  }, [transitionStage]);

  useEffect(() => {
    if (isMobile || isTablet || isDesktop) {
      const currentState = { isMobile, isTablet, isDesktop };
      const key = diffKey(currentState);

      if (key) {
        if (currentState[key] && props[key]) {
          setTransitionStage('fadeIn');
          return;
        }
      }
      setTransitionStage('fadeOut');
    }
  }, [isMobile, isTablet, isDesktop]);

  function diffKey(newState: VisualStateProps) {
    let result;
    ['isMobile', 'isTablet', 'isDesktop'].some((key: string) => {
      if (newState[key])
        if (newState[key] !== displayState[key] || displayState[key]) {
          result = key;
          return true;
        }
    });
    return result;
  }
  return (
    <Container
      className={`${transitionStage}`}
      display={display}
      style={{ maxWidth: width }}
      justifyContent='center'
      alignItems='center'
      h='100%'
      w='100%'
      p='0'
      key={props.key}
    >
      {props.children}
    </Container>
  );
}
export default ResponsiveWindowSetup;
