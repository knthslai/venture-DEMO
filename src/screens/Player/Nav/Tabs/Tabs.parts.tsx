import styled from 'styled-components';
import { Button, Row } from '../../../../components';
import { maxMedia, minMedia } from '../../../../utils';
import { CashSVG, ClickSVG, IceSpellCastSVG } from '../../../../assets/icons';

export const Container = styled(Row)`
  flex-wrap: nowrap;
  max-width: 728px;
  height: 0;
  ${minMedia.tablet} {
    margin-right: 24px;
  }
  ${maxMedia.tablet} {
    height: 70px;
    width: 287px;
  }
`;

export const Tab = styled((props) => <Button {...props} />)`
  padding: 4px 16px 0px !important;
  width: 80px;
  margin: 0 !important;
  a {
    margin: 0 !important;
  }
  position: relative;
  ${minMedia.tablet} {
    top: -350px;
    border: solid 2px #fff !important;
    ${({ selected }) =>
      `background-color: ${
        selected
          ? 'rgba(0,0,0,0.7); border-bottom-color: rgba(0,0,0,0.1) !important; '
          : `rgba(0, 0, 0, 0.3);`
      }`}
  }
  ${maxMedia.tablet} {
    position: fixed;
    bottom: 17px;
    :nth-child(1) {
      left: 10%;
    }
    :nth-child(2) {
      left: 40%;
    }
    :nth-child(3) {
      left: 70%;
    }

    ${({ selected }) => `${selected ? 'text-decoration:underline;' : ''}`}
  }
  :not(:first-child) {
    border-left: none;
  }
  :not(:last-child) {
    border-left: none;
  }
  :first-child {
    ${minMedia.tablet} {
      border-top-left-radius: 16px;
      border-left: solid 2px;
    }
  }
  :last-child {
    ${minMedia.tablet} {
      border-top-right-radius: 16px;
      border-right: solid 2px;
    }
  }
`;

export const options = [
  {
    title: 'Actions',
    SVG: ClickSVG,
    cards: [
      { title: 'Look' },
      { title: 'Throw', rarity: 'gold' },
      { title: 'Inspect', rarity: 'platinum' },
      { title: 'Taste' }
    ]
  },
  {
    title: 'Skills',
    SVG: IceSpellCastSVG,
    cards: [
      { title: 'Fireball' },
      { title: 'Ignite', rarity: 'bronze' },
      { title: 'Water Elemental', rarity: 'platinum' },
      { title: 'Ice Lance', rarity: 'gold' },
      { title: 'Lightning' },
      { title: 'Ignite' }
    ]
  },
  {
    title: 'Items',
    SVG: CashSVG,
    cards: [{ title: 'HP Potion' }, { title: 'MP Potion' }]
  }
];
