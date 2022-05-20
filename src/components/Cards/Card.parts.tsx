import styled from 'styled-components';
import { Column } from '..';

export const Card = styled(Column)`
  min-height: 280px;
  max-height: 280px;
  min-width: 200px;
  max-width: 200px;
  border-radius: 10px;
  position: relative;
  float: left;
  color: #fff;
  ${({ idx }) =>
    `animation-delay: ${(idx === undefined ? 1 : idx) * 0.1}s !important;`}
`;

export const Touch = styled.div``;

export const Container = styled.div`
  color: inherit;
  border: 0;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  display: flex;
  height: 280px;
  border-radius: 10px;
  position: relative;
  width: 200px;
  z-index: 0;
  overflow: hidden;
  &.basic {
    background-color: #403e45;
  }

  &:not(.basic):after {
    content: '';
    top: 0;
    transform: translateX(100%) rotate(30deg);
    width: 300%;
    height: 300%;
    position: absolute;
    z-index: 1;
    animation: shine 6s infinite reverse;
    ${({ idx = 1 }) =>
      `animation-delay: ${Math.round(Math.random() * idx)}s !important;`}
    background:
      linear-gradient( to right,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.8) 50%,
        rgba(128,186,232,0) 99%,
        rgba(128,186,232,0) 100%);
  }

  &.gold {
    box-shadow: 2px 2px 0.5em rgba(122, 98, 0, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.34);
    border: 1px solid #deca73;
    background: -moz-linear-gradient(
      -72deg,
      #ffde45,
      #ffffff 16%,
      #ffde45 21%,
      #ffffff 24%,
      #452100 27%,
      #ffde45 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffde45 72%,
      #ffffff 80%,
      #ffde45 84%,
      #452100
    );
    background: -webkit-linear-gradient(
      -72deg,
      #ffde45,
      #ffffff 16%,
      #ffde45 21%,
      #ffffff 24%,
      #452100 27%,
      #ffde45 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffde45 72%,
      #ffffff 80%,
      #ffde45 84%,
      #452100
    );
    background: -o-linear-gradient(
      -72deg,
      #ffde45,
      #ffffff 16%,
      #ffde45 21%,
      #ffffff 24%,
      #452100 27%,
      #ffde45 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffde45 72%,
      #ffffff 80%,
      #ffde45 84%,
      #452100
    );
    background: linear-gradient(
      -72deg,
      #ffde45,
      #ffffff 16%,
      #ffde45 21%,
      #ffffff 24%,
      #452100 27%,
      #ffde45 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffde45 72%,
      #ffffff 80%,
      #ffde45 84%,
      #452100
    );
  }
  &.silver {
    box-shadow: 2px 2px 0.5em rgba(122, 122, 122, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.34);
    border: 1px solid #dedede;
    background: -moz-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #454545 27%,
      #dedede 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #a1a1a1
    );
    background: -webkit-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #454545 27%,
      #dedede 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #a1a1a1
    );
    background: -o-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #454545 27%,
      #dedede 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #a1a1a1
    );
    background: linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #454545 27%,
      #dedede 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #a1a1a1
    );
  }
  &.bronze {
    box-shadow: 2px 2px 0.5em rgba(122, 55, 34, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #dea173;
    background: -moz-linear-gradient(
      -72deg,
      #ca7345,
      #ffdeca 16%,
      #ca7345 21%,
      #ffdeca 24%,
      #a14521 27%,
      #ca7345 36%,
      #ffdeca 45%,
      #ffdeca 60%,
      #ca7345 72%,
      #ffdeca 80%,
      #ca7345 84%,
      #732100
    );
    background: -webkit-linear-gradient(
      -72deg,
      #ca7345,
      #ffdeca 16%,
      #ca7345 21%,
      #ffdeca 24%,
      #a14521 27%,
      #ca7345 36%,
      #ffdeca 45%,
      #ffdeca 60%,
      #ca7345 72%,
      #ffdeca 80%,
      #ca7345 84%,
      #732100
    );
    background: -o-linear-gradient(
      -72deg,
      #ca7345,
      #ffdeca 16%,
      #ca7345 21%,
      #ffdeca 24%,
      #a14521 27%,
      #ca7345 36%,
      #ffdeca 45%,
      #ffdeca 60%,
      #ca7345 72%,
      #ffdeca 80%,
      #ca7345 84%,
      #732100
    );
    background: linear-gradient(
      -72deg,
      #ca7345,
      #ffdeca 16%,
      #ca7345 21%,
      #ffdeca 24%,
      #a14521 27%,
      #ca7345 36%,
      #ffdeca 45%,
      #ffdeca 60%,
      #ca7345 72%,
      #ffdeca 80%,
      #ca7345 84%,
      #732100
    );
  }

  &.platinum {
    box-shadow: 2px 2px 0.5em rgba(122, 122, 122, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #cacade;
    background: -moz-linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #555564 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    );
    background: -webkit-linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #555564 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    );
    background: -o-linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #555564 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    );
    background: linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #555564 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    );
  }

  &.pinkgold {
    box-shadow: 2px 2px 0.5em rgba(122, 98, 55, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #caa145;
    background: -moz-linear-gradient(
      -72deg,
      #ffdeca,
      #ffffff 16%,
      #ffdeca 21%,
      #ffffff 24%,
      #de7345 27%,
      #ffdeca 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdeca 72%,
      #ffffff 80%,
      #ffdeca 84%,
      #de7345
    );
    background: -webkit-linear-gradient(
      -72deg,
      #ffdeca,
      #ffffff 16%,
      #ffdeca 21%,
      #ffffff 24%,
      #de7345 27%,
      #ffdeca 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdeca 72%,
      #ffffff 80%,
      #ffdeca 84%,
      #de7345
    );
    background: -o-linear-gradient(
      -72deg,
      #ffdeca,
      #ffffff 16%,
      #ffdeca 21%,
      #ffffff 24%,
      #de7345 27%,
      #ffdeca 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdeca 72%,
      #ffffff 80%,
      #ffdeca 84%,
      #de7345
    );
    background: linear-gradient(
      -72deg,
      #ffdeca,
      #ffffff 16%,
      #ffdeca 21%,
      #ffffff 24%,
      #de7345 27%,
      #ffdeca 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdeca 72%,
      #ffffff 80%,
      #ffdeca 84%,
      #de7345
    );
  }
  &.whitegold {
    box-shadow: 2px 2px 0.5em rgba(155, 122, 89, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #caa173;
    background: -moz-linear-gradient(
      -72deg,
      #ffdea1,
      #ffffff 16%,
      #ffdea1 21%,
      #ffffff 24%,
      #736445 27%,
      #ffdea1 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdea1 72%,
      #ffffff 80%,
      #ffdea1 84%,
      #736445
    );
    background: -webkit-linear-gradient(
      -72deg,
      #ffdea1,
      #ffffff 16%,
      #ffdea1 21%,
      #ffffff 24%,
      #736445 27%,
      #ffdea1 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdea1 72%,
      #ffffff 80%,
      #ffdea1 84%,
      #736445
    );
    background: -o-linear-gradient(
      -72deg,
      #ffdea1,
      #ffffff 16%,
      #ffdea1 21%,
      #ffffff 24%,
      #736445 27%,
      #ffdea1 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdea1 72%,
      #ffffff 80%,
      #ffdea1 84%,
      #736445
    );
    background: linear-gradient(
      -72deg,
      #ffdea1,
      #ffffff 16%,
      #ffdea1 21%,
      #ffffff 24%,
      #736445 27%,
      #ffdea1 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffdea1 72%,
      #ffffff 80%,
      #ffdea1 84%,
      #736445
    );
  }
  &.yellowgold {
    box-shadow: 2px 2px 0.5em rgba(155, 122, 89, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #deca45;
    background: -moz-linear-gradient(
      -72deg,
      #ffc373,
      #ffffff 16%,
      #ffc373 21%,
      #ffffff 24%,
      #a17434 27%,
      #ffc373 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffc373 72%,
      #ffffff 80%,
      #ffc373 84%,
      #a17434
    );
    background: -webkit-linear-gradient(
      -72deg,
      #ffc373,
      #ffffff 16%,
      #ffc373 21%,
      #ffffff 24%,
      #a17434 27%,
      #ffc373 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffc373 72%,
      #ffffff 80%,
      #ffc373 84%,
      #a17434
    );
    background: -o-linear-gradient(
      -72deg,
      #ffc373,
      #ffffff 16%,
      #ffc373 21%,
      #ffffff 24%,
      #a17434 27%,
      #ffc373 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffc373 72%,
      #ffffff 80%,
      #ffc373 84%,
      #a17434
    );
    background: linear-gradient(
      -72deg,
      #ffc373,
      #ffffff 16%,
      #ffc373 21%,
      #ffffff 24%,
      #a17434 27%,
      #ffc373 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffc373 72%,
      #ffffff 80%,
      #ffc373 84%,
      #a17434
    );
  }
  &.perl {
    box-shadow: 2px 2px 0.5em rgba(98, 73, 122, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.75),
      inset -1px -1px 0 rgba(0, 0, 0, 0.34);
    border: 1px solid #cacaca;
    background: -moz-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #caa1de 27%,
      #dea1ca 30%,
      #dedede 38%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #caa1de 93%,
      #dea1ca
    );
    background: -webkit-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #caa1de 27%,
      #dea1ca 30%,
      #dedede 38%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #caa1de 93%,
      #dea1ca
    );
    background: -o-linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #caa1de 27%,
      #dea1ca 30%,
      #dedede 38%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #caa1de 93%,
      #dea1ca
    );
    background: linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #caa1de 27%,
      #dea1ca 30%,
      #dedede 38%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #caa1de 93%,
      #dea1ca
    );
  }
  &.china {
    box-shadow: 2px 2px 0.5em rgba(155, 155, 155, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.21);
    border: 1px solid #cacaca;
    background: -moz-linear-gradient(#ffffff, #e3e3e3);
    background: -webkit-linear-gradient(#ffffff, #e3e3e3);
    background: -o-linear-gradient(#ffffff, #e3e3e3);
    background: linear-gradient(#ffffff, #e3e3e3);
  }
  &.woody {
    box-shadow: 2px 2px 0.5em rgba(155, 121, 34, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.9),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #a16421;
    background: -moz-linear-gradient(
      #ca7321,
      #ffcaa1 15%,
      #dea173 20%,
      #a16421 15%,
      #ca7321 30%,
      #ffcaa1 35%,
      #ca7321 40%,
      #ffcaa1 50%,
      #a16421 55%,
      #ca7321 60%,
      #ffcaa1 65%,
      #ca7321 75%,
      #dea173 80%,
      #ffcaa1 90%,
      #dea173 80%,
      #ca7321
    );
    background: -webkit-linear-gradient(
      #ca7321,
      #ffcaa1 15%,
      #dea173 20%,
      #a16421 15%,
      #ca7321 30%,
      #ffcaa1 35%,
      #ca7321 40%,
      #ffcaa1 50%,
      #a16421 55%,
      #ca7321 60%,
      #ffcaa1 65%,
      #ca7321 75%,
      #dea173 80%,
      #ffcaa1 90%,
      #dea173 80%,
      #ca7321
    );
    background: -o-linear-gradient(
      #ca7321,
      #ffcaa1 15%,
      #dea173 20%,
      #a16421 15%,
      #ca7321 30%,
      #ffcaa1 35%,
      #ca7321 40%,
      #ffcaa1 50%,
      #a16421 55%,
      #ca7321 60%,
      #ffcaa1 65%,
      #ca7321 75%,
      #dea173 80%,
      #ffcaa1 90%,
      #dea173 80%,
      #ca7321
    );
    background: linear-gradient(
      #ca7321,
      #ffcaa1 15%,
      #dea173 20%,
      #a16421 15%,
      #ca7321 30%,
      #ffcaa1 35%,
      #ca7321 40%,
      #ffcaa1 50%,
      #a16421 55%,
      #ca7321 60%,
      #ffcaa1 65%,
      #ca7321 75%,
      #dea173 80%,
      #ffcaa1 90%,
      #dea173 80%,
      #ca7321
    );
  }

  &.carbon {
    border: 1px solid #565656;
    box-shadow: 2px 2px 0.5em rgba(0, 0, 0, 0.55),
      inset 1px 1px 0 rgba(255, 255, 255, 0.55),
      inset -1px -1px 0 rgba(0, 0, 0, 0.5);
    background: -moz-repeating-linear-gradient(
      top,
      #565656,
      #131313 2px,
      #565656 1px
    );
    background: -o-repeating-linear-gradient(
      top,
      #565656,
      #131313 2px,
      #565656 1px
    );
    background: -webkit-repeating-linear-gradient(
      top,
      #565656,
      #131313 2px,
      #565656 1px
    );
    background: repeating-linear-gradient(
      top,
      #565656,
      #131313 2px,
      #565656 1px
    );
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(30deg);
    }
    80% {
      transform: translateX(-100%) translateY(-100%) rotate(30deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(30deg);
    }
  }
`;

export const CardBG = styled.button`
  border: none;
  color: white;
  background-color: #17141d;
  border-radius: 10px;
  height: 270px;
  width: 190px;
  position: relative;
  z-index: 2;
`;

export const OverlayContainer = styled.button`
  border: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
