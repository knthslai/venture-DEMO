import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import styled from 'styled-components';
import {
  Card as CardContainer,
  Container,
  CardBG,
  OverlayContainer,
  Touch
} from './Card.parts';
import { Column, Modal } from '../../components';
import { Row } from '../';
import { maxMedia, minMedia } from '../../utils';
import { BodyText, H1, H2, H4 } from '../Texts';
import Flex from '../Flex';
import * as Classes from '../../cards/classes';
import { useDisclosure } from '@chakra-ui/react';
import Button from '../Button';
import * as checks from '../../cards/checks';
import rollADie from '../RollADie/RollADie';
import { DiceContainer } from '../RollADie';
import { debounce, isEmpty } from 'lodash';
export interface CardProps {
  title: string;
  SVGIcon?: any;
  idx?: number;
  rarity?: string;
  onClick?: any;
  back?: any[];
  noMargin?: boolean;
  classType?: string;
  option?: any;
  stats?: any;
  check?: boolean;
  rollDice?: Function;
  lvl?: number;
  selected?: Function;
}

const BackColumn = styled(Column)`
  padding: 10px;
`;

export const Card = ({
  title,
  SVGIcon,
  idx = 1,
  rarity = 'basic',
  onClick,
  className,
  back = [],
  noMargin,
  classType,
  stats,
  selected,
  check,
  rollDice,
  lvl,
  ...props
}: HTMLAttributes<HTMLDivElement> & CardProps) => {
  const timeoutRef = useRef({ ref: 0 }).current;
  const [isHovered, setIsHovered] = useState(false);
  const debouncedHandleMouseEnter = debounce(() => setIsHovered(true), 2500);

  const handlOnMouseLeave = () => {
    if (timeoutRef.ref) window.clearTimeout(timeoutRef.ref);
    timeoutRef.ref = window.setTimeout(() => {
      setIsHovered(false);
    }, 1000);
    debouncedHandleMouseEnter.cancel();
  };

  if (typeof SVGIcon === 'string') {
    let Icon;
    if (classType) {
      const { SVGIcon } = Classes[classType];
      Icon = SVGIcon;
    }

    return (
      <CardContainer
        onMouseEnter={debouncedHandleMouseEnter}
        onMouseLeave={handlOnMouseLeave}
        idx={idx}
        {...props}
        className={`flip-card ${className} ${noMargin ? 'card-no-margin' : ''}`}
      >
        <Touch className={isHovered ? 'flip-card-inner' : ''} onClick={onClick}>
          <Container
            idx={idx}
            className={`metal ${rarity} ${
              stats ? (isHovered ? 'flip-card-front' : '') : ''
            }`}
          >
            <CardBG
              style={{
                backgroundImage: `url(${SVGIcon})`,
                backgroundPosition: '35% 35%'
              }}
            >
              <Column style={{ height: '100%' }}>
                <Flex />
                <H2 style={{ marginBottom: 8 }}>{title}</H2>
                {!!Icon && (
                  <div style={{ height: 0 }}>
                    <Icon
                      style={{
                        position: 'absolute',
                        width: 42,
                        height: 42,
                        left: -4,
                        top: -4,
                        backgroundColor: '#403e45',
                        border: 'solid 2px #403e45',
                        padding: 3,
                        borderBottomRightRadius: 21
                      }}
                    />
                  </div>
                )}
              </Column>
            </CardBG>
          </Container>
          {!!stats && (
            <Container
              idx={idx}
              className={`metal ${rarity} ${
                isHovered ? 'flip-card-back' : 'hidden'
              }`}
            >
              <CardBG
                style={{
                  backgroundImage: `url(${SVGIcon})`,
                  backgroundPosition: '35% 35%'
                }}
              >
                <Column
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                  }}
                >
                  {!!Icon && (
                    <div style={{ height: 0 }}>
                      <Icon
                        style={{
                          position: 'absolute',
                          width: 42,
                          height: 42,
                          left: -4,
                          top: -4,
                          backgroundColor: '#403e45',
                          border: 'solid 2px #403e45',
                          padding: 3,
                          borderBottomRightRadius: 21
                        }}
                      />
                    </div>
                  )}
                  <H4
                    style={{
                      fontWeight: 600
                    }}
                  >
                    {title}
                  </H4>
                  <BackColumn>
                    {checks.stats.map((stat: string) => (
                      <H4
                        key={stat}
                        style={{
                          textAlign: 'left',
                          alignSelf: 'flex-start'
                        }}
                      >
                        {`${stat.toUpperCase()}:   ${stats[stat]}`}
                      </H4>
                    ))}
                  </BackColumn>
                </Column>
              </CardBG>
            </Container>
          )}
        </Touch>
      </CardContainer>
    );
  } else
    return (
      <CardContainer
        onMouseEnter={debouncedHandleMouseEnter}
        onMouseLeave={handlOnMouseLeave}
        idx={idx}
        {...props}
        className={`flip-card ${className} ${noMargin ? 'card-no-margin' : ''}`}
      >
        <Touch
          className={isHovered ? 'flip-card-inner' : ''}
          onClick={
            check && selected
              ? (e) => {
                  e.stopPropagation();
                  if (rollDice) rollDice(lvl);
                }
              : onClick
          }
        >
          <Container
            idx={idx}
            className={`metal ${rarity} ${isHovered ? 'flip-card-front' : ''}`}
          >
            <CardBG>
              <Column
                style={{ height: '100%', justifyContent: 'space-evenly' }}
              >
                <H2>{title}</H2>
                {!!SVGIcon && <SVGIcon style={{ width: 78, height: 78 }} />}
              </Column>
            </CardBG>
          </Container>
          <Container
            idx={idx}
            className={`metal ${rarity} ${
              isHovered ? 'flip-card-back' : 'hidden'
            }`}
          >
            <CardBG>
              <Column
                style={{ height: '100%', justifyContent: 'space-evenly' }}
              >
                {!!SVGIcon && <SVGIcon style={{ width: 78, height: 78 }} />}
                <H4
                  style={{
                    fontWeight: 600
                  }}
                >
                  {title}
                </H4>
                {!!back && !!back.length && (
                  <BackColumn>
                    {back.map((text) => (
                      <BodyText
                        key={text}
                        style={{
                          textAlign: 'left',
                          alignSelf: 'flex-start'
                        }}
                      >
                        {text}
                      </BodyText>
                    ))}
                  </BackColumn>
                )}
              </Column>
            </CardBG>
          </Container>
        </Touch>
      </CardContainer>
    );
};

interface CardOverlayProps extends ButtonHTMLAttributes<CardProps> {
  card?: CardProps;
  options?: any[];
  diceRoll?: any;
  selected?: any;
}

const DeleteButton = styled(Button)`
  background-color: #930000;
  border-radius: 16px;
  padding: 6px 12px;
  margin: 24px;
  border: solid 2px #fff;
  font-size: 24px;
`;

const DiceArea = styled(Column)`
  width: 100%;
  position: absolute;
  top: 62%;
`;

export const CardOverlay = ({
  card,
  onClick,
  diceRoll,
  selected,
  ...props
}: CardOverlayProps) => {
  const elements = useRef<any[]>([...Array(5)].map(() => [...Array(5)]));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [total, setTotal] = useState<number>(0);
  const [isRolling, setIsRolling] = useState(false);

  const emptyGrid = () => {
    Array.prototype.forEach.call(elements.current, (row) => {
      Array.prototype.forEach.call(row, (e) => {
        if (e)
          while (e.firstChild) {
            e.firstChild.remove();
          }
      });
    });
  };
  useEffect(() => {
    if (total > 0) {
      setTotal(0);
      emptyGrid();
    }
  }, [selected]);

  const handleOnclick = (e) => {
    if (onClick) {
      onClose();
      onClick(e);
    }
  };
  const getEmpty = () => {
    const [row, col] = random();
    if (elements.current[row][col])
      if (elements.current[row][col].firstChild === null)
        return elements.current[row][col];

    return getEmpty();
    function random() {
      return [Math.round(Math.random() * 4), Math.round(Math.random() * 4)];
    }
  };
  const rollDice = (numberOfDice) => {
    if (isRolling) return null;
    let result = 0;
    emptyGrid();
    setIsRolling(true);
    recursivelyRollDice(1, numberOfDice, result);
  };
  const recursivelyRollDice = (curr, max, result) => {
    rollADie({
      element: getEmpty(),
      numberOfDice: 1,
      noDelay: true,
      callback: (num) => {
        const newTotal = Number(result) + Number(num);
        setTimeout(() => {
          if (curr < max) {
            recursivelyRollDice(curr + 1, max, newTotal);
          } else {
            setTotal(newTotal);
            setIsRolling(false);
            //TODO:
            // - send to master
            // - share results to team
          }
        }, Math.random() * 500);
      },
      soundVolume: 0.3
    });
  };
  return (
    <OverlayContainer {...props} onClick={handleOnclick}>
      {!!card && <Card {...card} rollDice={rollDice} selected={selected} />}
      {!!card && !!card.check && (
        <>
          <DiceArea>
            {[...Array(5)]
              .map(() => [...Array(5)])
              .map((ro, row) => (
                <Row key={'row' + row}>
                  {ro
                    .slice(
                      0,
                      ro.length -
                        Math.abs(row - Math.round((ro.length - 1) / 2)) * 2
                    )
                    .map((_, col) => (
                      <DiceContainer
                        style={{
                          height: 80,
                          width: 80
                        }}
                        key={'col' + col}
                        ref={(r) => (elements.current[row][col] = r)}
                      />
                    ))}
                </Row>
              ))}
          </DiceArea>
          {(total > 0 || isRolling) && (
            <Row
              style={{
                position: 'relative',
                background:
                  'linear-gradient(rgba(0,0,0,0), #000, #000,#000, rgba(0,0,0,0))'
              }}
            >
              <H2>{`Rolled: `}</H2>
              <H1 style={{ marginLeft: 12 }}>{total}</H1>
            </Row>
          )}
        </>
      )}
      {!!card && !!card.option && (
        <>
          <DeleteButton
            key={card.option.text}
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            {card.option.text}
          </DeleteButton>
          <Modal
            title={"Let's see ..."}
            isOpen={isOpen}
            buttonText={card.option.text}
            onClose={onClose}
            onSubmit={card.option.onSubmit}
          >
            {card.option.body}
          </Modal>
        </>
      )}
    </OverlayContainer>
  );
};

interface CardsOverlayProps extends ButtonHTMLAttributes<CardProps[]> {
  cards?: CardProps[];
}
const CardsRow = styled(Row)`
  ${minMedia.tablet} {
    .card:nth-child(1) {
      margin-right: 56px;
    }
  }
  ${maxMedia.tablet} {
    .card:nth-child(1) {
      margin-bottom: 36px;
    }
  }
`;

export const CardsOverlay = ({ cards, ...props }: CardsOverlayProps) => {
  return (
    <OverlayContainer {...props}>
      <CardsRow>
        {!!cards &&
          cards.map((card, idx) => (
            <>
              <Card
                className='animate card'
                key={card.title + idx}
                {...card}
                idx={idx}
              />
            </>
          ))}
      </CardsRow>
    </OverlayContainer>
  );
};
