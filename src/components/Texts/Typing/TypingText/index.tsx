import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { H1 } from '../..';
import { Row } from '../../..';
import { useWindowSize } from '../../../../helpers';
import { maxMedia } from '../../../../utils';
import Cursor from '../Cursor';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface TypingProps {
  text?: string;
  delay?: number;
  cursorDuration?: string;
  reverse?: boolean;
  delayOnReverse?: number;
  brakeBeforeReverse?: number;
  idx?: number;
  currIdx?: number;
  setIdx?: Dispatcher<number>;
  maxIdx?: number;
  removeCursor?: boolean;
  onLast?: boolean;
  className?: string;
  onEnd?: any;
  scrollRef?: any;
  timedOutCursor?: boolean;
}

const TypingRow = styled(Row)`
  ${({ main, width }) =>
    main
      ? ''
      : `width: ${
          width * 0.4
        }px; justify-content: flex-start; text-align: left;`}
  ${maxMedia.tablet} {
    width: 280px;
  }
`;

export const TextAnimation = ({
  text = '',
  delay = 100,
  cursorDuration = '1s',
  reverse = false,
  delayOnReverse = 50,
  brakeBeforeReverse = 2500,
  maxIdx = 1,
  idx = 0,
  currIdx = 0,
  setIdx,
  removeCursor = false,
  onEnd = false,
  className,
  scrollRef,
  timedOutCursor
}: TypingProps) => {
  const [hideCursor, setHideCursor] = useState(removeCursor);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isReverseDirection, setReverseDirection] = useState(false);
  const [typingDelay, setTypingDelay] = useState(delay);
  const cursor = <Cursor cursorDuration={cursorDuration} />;
  const { width } = useWindowSize();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    if (wordIndex === text.length && !hideCursor) setHideCursor(true);
  }, [idx, maxIdx]);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    let timeout;
    if (wordIndex === text.length && !reverse) {
      if (setIdx) {
        setTimeout(() => {
          if (idx < maxIdx) {
            setIdx(idx + 1);
            setHideCursor(true);
          } else {
            if (timedOutCursor) setTimeout(() => setHideCursor(true), 3000);
          }
          if (onEnd) onEnd();
        }, 1000);
      }
      return;
    }

    if (wordIndex === text.length && reverse) {
      setReverseDirection(true);
      setTypingDelay(brakeBeforeReverse);
    }

    if (wordIndex === text.length - 1 && isReverseDirection) {
      setTypingDelay(delayOnReverse);
    }

    if (wordIndex === 0) {
      if (setIdx)
        setTimeout(() => {
          if (setIdx && isReverseDirection)
            setIdx(maxIdx === currIdx ? 0 : currIdx + 1);
          setReverseDirection(false);
          setTypingDelay(delay);
          timeout = setTimeout(() => {
            const letter = text.substr(wordIndex, 1);

            setWordIndex((prevIndex) =>
              isReverseDirection ? prevIndex - 1 : prevIndex + 1
            );
            setTypedWord((prev) =>
              isReverseDirection ? prev.slice(0, -1) : prev + letter
            );
          }, typingDelay);
        }, 1000);
      else {
        setReverseDirection(false);
        setTypingDelay(delay);
        timeout = setTimeout(() => {
          const letter = text.substr(wordIndex, 1);

          setWordIndex((prevIndex) =>
            isReverseDirection ? prevIndex - 1 : prevIndex + 1
          );
          setTypedWord((prev) =>
            isReverseDirection ? prev.slice(0, -1) : prev + letter
          );
        }, typingDelay);
      }
    } else {
      timeout = setTimeout(() => {
        const letter = text.substr(wordIndex, 1);
        setWordIndex((prevIndex) =>
          isReverseDirection ? prevIndex - 1 : prevIndex + 1
        );
        setTypedWord((prev) =>
          isReverseDirection ? prev.slice(0, -1) : prev + letter
        );
      }, typingDelay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [wordIndex, typedWord]);

  return (
    <TypingRow main={idx === currIdx} className={className} width={width}>
      <H1 className={className}>
        {typedWord}
        {!hideCursor && cursor}
      </H1>
    </TypingRow>
  );
};
