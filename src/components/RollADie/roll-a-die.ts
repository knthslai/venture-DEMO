import styled from 'styled-components';

export const DiceContainer = styled.div`
  .remove-dice {
    display: inline-block;
    position: relative;
    width: 0;
    height: 0;
    perspective: 1000px;
    margin-right: 100px;
    margin-bottom: 50px;
    box-sizing: border-box;

    transition: opacity 1s ease-in-out;

    transform: rotateX(-15deg);
    transform-style: preserve-3d;
    animation: removeDice 0.5s linear both;

    .dice {
      display: inline-block;
      position: absolute;

      width: 50px;
      height: 50px;

      transform-style: preserve-3d;
      transform-origin: center center;

      .dice-face {
        position: absolute;
        background: white;

        width: 50px;
        height: 50px;
        border: 2px solid #aaa;
        box-sizing: border-box;

        transform-origin: center center;
        backface-visibility: hidden;

        &:nth-child(1) {
          transform: translateZ(25px);
        }
        &:nth-child(2) {
          transform: rotateY(-90deg) translateZ(25px);
        }
        &:nth-child(3) {
          transform: rotateX(-90deg) translateZ(25px);
        }
        &:nth-child(4) {
          transform: rotateX(90deg) translateZ(25px);
        }
        &:nth-child(5) {
          transform: rotateY(90deg) translateZ(25px);
        }
        &:nth-child(6) {
          transform: rotateY(180deg) translateZ(25px);
        }
      }
    }
  }

  .dice-outer {
    display: inline-block;
    position: relative;
    width: 0;
    height: 0;
    perspective: 1000px;
    margin-right: 100px;
    margin-bottom: 50px;
    box-sizing: border-box;

    transition: opacity 1s ease-in-out;

    transform: rotateX(-15deg);
    transform-style: preserve-3d;
    animation: diceRoll 3s linear both;

    .dice {
      display: inline-block;
      position: absolute;

      width: 50px;
      height: 50px;

      transform-style: preserve-3d;
      transform-origin: center center;

      .dice-face {
        position: absolute;
        background: white;

        width: 50px;
        height: 50px;
        border: 2px solid #aaa;
        box-sizing: border-box;

        transform-origin: center center;
        backface-visibility: hidden;

        &:nth-child(1) {
          transform: translateZ(25px);
        }
        &:nth-child(2) {
          transform: rotateY(-90deg) translateZ(25px);
        }
        &:nth-child(3) {
          transform: rotateX(-90deg) translateZ(25px);
        }
        &:nth-child(4) {
          transform: rotateX(90deg) translateZ(25px);
        }
        &:nth-child(5) {
          transform: rotateY(90deg) translateZ(25px);
        }
        &:nth-child(6) {
          transform: rotateY(180deg) translateZ(25px);
        }
      }
    }
  }
  @keyframes removeDice {
    0% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-55deg) rotateY(45deg) translate(70px, 209px)
        rotateZ(0deg) rotateY(0deg) scale(0);
    }
  }
  @keyframes diceRoll {
    0% {
      transform: rotateX(-55deg) rotateY(45deg) translate(0px, 0px)
        rotateZ(-200deg) rotateY(100deg);
    }
    1% {
      transform: rotateX(-55deg) rotateY(45deg) translate(3px, 1px)
        rotateZ(-190deg) rotateY(95deg);
    }
    2% {
      transform: rotateX(-55deg) rotateY(45deg) translate(6px, 11px)
        rotateZ(-180deg) rotateY(90deg);
    }
    3% {
      transform: rotateX(-55deg) rotateY(45deg) translate(9px, 31px)
        rotateZ(-170deg) rotateY(85deg);
    }
    4% {
      transform: rotateX(-55deg) rotateY(45deg) translate(11px, 58px)
        rotateZ(-160deg) rotateY(80deg);
    }
    5% {
      transform: rotateX(-55deg) rotateY(45deg) translate(14px, 94px)
        rotateZ(-150deg) rotateY(75deg);
    }
    6% {
      transform: rotateX(-55deg) rotateY(45deg) translate(17px, 140px)
        rotateZ(-140deg) rotateY(70deg);
    }
    7% {
      transform: rotateX(-55deg) rotateY(45deg) translate(20px, 194px)
        rotateZ(-130deg) rotateY(65deg);
    }
    8% {
      transform: rotateX(-55deg) rotateY(45deg) translate(23px, 171px)
        rotateZ(-120deg) rotateY(60deg);
    }
    9% {
      transform: rotateX(-55deg) rotateY(45deg) translate(25px, 147px)
        rotateZ(-110deg) rotateY(55deg);
    }
    10% {
      transform: rotateX(-55deg) rotateY(45deg) translate(28px, 150px)
        rotateZ(-100deg) rotateY(50deg);
    }
    11% {
      transform: rotateX(-55deg) rotateY(45deg) translate(30px, 126px)
        rotateZ(-90deg) rotateY(45deg);
    }
    12% {
      transform: rotateX(-55deg) rotateY(45deg) translate(33px, 129px)
        rotateZ(-80deg) rotateY(40deg);
    }
    13% {
      transform: rotateX(-55deg) rotateY(45deg) translate(35px, 141px)
        rotateZ(-70deg) rotateY(35deg);
    }
    14% {
      transform: rotateX(-55deg) rotateY(45deg) translate(37px, 162px)
        rotateZ(-60deg) rotateY(30deg);
    }
    15% {
      transform: rotateX(-55deg) rotateY(45deg) translate(40px, 192px)
        rotateZ(-50deg) rotateY(25deg);
    }
    16% {
      transform: rotateX(-55deg) rotateY(45deg) translate(42px, 185px)
        rotateZ(-40deg) rotateY(20deg);
    }
    17% {
      transform: rotateX(-55deg) rotateY(45deg) translate(44px, 175px)
        rotateZ(-30deg) rotateY(15deg);
    }
    18% {
      transform: rotateX(-55deg) rotateY(45deg) translate(46px, 173px)
        rotateZ(-20deg) rotateY(10deg);
    }
    19% {
      transform: rotateX(-55deg) rotateY(45deg) translate(48px, 180px)
        rotateZ(-10deg) rotateY(5deg);
    }
    20% {
      transform: rotateX(-55deg) rotateY(45deg) translate(50px, 195px)
        rotateZ(0deg) rotateY(0deg);
    }
    21% {
      transform: rotateX(-55deg) rotateY(45deg) translate(51px, 192px)
        rotateZ(0deg) rotateY(0deg);
    }
    22% {
      transform: rotateX(-55deg) rotateY(45deg) translate(53px, 190px)
        rotateZ(0deg) rotateY(0deg);
    }
    23% {
      transform: rotateX(-55deg) rotateY(45deg) translate(54px, 197px)
        rotateZ(0deg) rotateY(0deg);
    }
    24% {
      transform: rotateX(-55deg) rotateY(45deg) translate(56px, 196px)
        rotateZ(0deg) rotateY(0deg);
    }
    25% {
      transform: rotateX(-55deg) rotateY(45deg) translate(57px, 198px)
        rotateZ(0deg) rotateY(0deg);
    }
    26% {
      transform: rotateX(-55deg) rotateY(45deg) translate(58px, 198px)
        rotateZ(0deg) rotateY(0deg);
    }
    27% {
      transform: rotateX(-55deg) rotateY(45deg) translate(59px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    28% {
      transform: rotateX(-55deg) rotateY(45deg) translate(59px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    29% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    30% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    31% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    32% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    33% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    34% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    35% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    36% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    37% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    38% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    39% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    40% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    41% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    42% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    43% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    44% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    45% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    46% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    47% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    48% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    49% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    51% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    52% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    53% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    54% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    55% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    56% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    57% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    58% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    59% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    60% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    61% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    62% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    63% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    64% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    65% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    66% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    67% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    68% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    69% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    70% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    71% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    72% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    73% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    74% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    75% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    76% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    77% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    78% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    79% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    80% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    81% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    82% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    83% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    84% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    85% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    86% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    87% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    88% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    89% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    90% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    91% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    92% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    93% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    94% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    95% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    96% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    97% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    98% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    99% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-55deg) rotateY(45deg) translate(60px, 199px)
        rotateZ(0deg) rotateY(0deg);
    }
  }
`;
