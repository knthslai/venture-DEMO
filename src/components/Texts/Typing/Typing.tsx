import { useEffect, useState, useRef, createRef, useContext } from 'react';
import Container from '../../Container';
import { TextAnimation } from './TypingText';
import { Column, FromTab, ScrollContainer } from './Typing.parts';
import { useWindowSize } from '../../../helpers';
import { DialogContext } from '../../../contexts/Dialogue';

export const Typing = ({ ...props }) => {
  const { messages, idx, setIdx } = useContext(DialogContext);
  if (!messages.length && props.text) {
    return <TextAnimation {...props} />;
  } else {
    const BottomScrollRef = useRef<any>();
    const [lastIdx, setLastIdx] = useState(messages.length - 1);
    const { width } = useWindowSize();

    useEffect(() => {
      BottomScrollRef.current.scrollIntoView({ behavior: 'smooth' });
      if (idx != 0) {
        if (messages.length - 1 > lastIdx)
          if (messages[idx + 1]) {
            setIdx(idx + 1);
            setLastIdx(messages.length - 1);
          }
      } else {
        setLastIdx(messages.length - 1);
      }
    }, [messages]);

    return (
      <Column width={width}>
        {messages.map((payload: any, mapIdx) => {
          let text = payload;
          let func = false;
          let from = 'Master';
          let timedOutCursor = false;
          if (typeof payload === 'object') {
            text = payload.text;
            func = payload.func;
            if (payload.from) from = payload.from;
            timedOutCursor = payload.timedOutCursor;
          }
          return (
            <Container
              key={text + mapIdx}
              style={{
                margin: 0,
                padding: 12,
                width: 'fit-content',
                minWidth: 170
              }}
              className={`animate ${
                idx >= mapIdx ? (idx > mapIdx ? 'chatOut' : 'chatIn') : 'hidden'
              }`}
            >
              <div style={{ width: 0 }}>
                <FromTab main={idx === mapIdx}>{from}</FromTab>
              </div>
              {idx >= mapIdx && (
                <TextAnimation
                  {...props}
                  onEnd={func}
                  className='animate'
                  text={text}
                  currIdx={idx}
                  idx={mapIdx}
                  setIdx={setIdx}
                  maxIdx={lastIdx}
                  scrollRef={BottomScrollRef}
                  timedOutCursor={timedOutCursor}
                />
              )}
            </Container>
          );
        })}
        <ScrollContainer ref={BottomScrollRef} />
      </Column>
    );
  }
};
