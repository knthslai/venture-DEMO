import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  animation: cursor infinite;
  color: #fff;
  @keyframes cursor {
    from,
    to {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }
`;

function Cursor({ cursorDuration = '1s' }) {
  const cursorDurationStyle = {
    animationDuration: cursorDuration
  };
  return <Container style={cursorDurationStyle}>|</Container>;
}

export default Cursor;
