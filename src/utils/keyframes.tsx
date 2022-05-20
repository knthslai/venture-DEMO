import { css, keyframes } from 'styled-components';
export const fadeIn = keyframes`
  0% {
    display: none !important;
    opacity: 0;
  }
  1% {
    display: block;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
  }
  51% {
    display: block;
    max-height: 100%;
    opacity: 0;
  }
  52% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }

  67% {
    display: block;
    max-height: 100%;
    opacity: 0;
  }
  99% {
    display: block;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
  }
  100% {
    display: none !important;
    opacity: 0;
    max-height: 0;
  }
`;

export const shouldFade = (bool: boolean) =>
  css`
    animation: ${bool ? fadeIn : fadeOut} ${bool ? 2 : 1}s !important;
  `;
export const shouldHide = (bool: boolean) =>
  css`
    ${bool ? 'display: none !important;' : ''}
  `;
