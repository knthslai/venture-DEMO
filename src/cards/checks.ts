import { BicepsSVG, CoinflipSVG, SpellBookSVG, SprintSVG } from '../assets';

export const effectiveness = (num) => {
  let result = 1;
  switch (true) {
    case num >= 4 && num < 6:
      result = 2;
      break;
    case num >= 6 && num < 8:
      result = 3;
      break;
    case num >= 8 && num < 10:
      result = 4;
      break;
    case num >= 10:
      result = 4;
      result += Math.floor((num - 10 || 0) / 2);
      break;
    default:
  }
  return result;
};

const rarity = (num) => {
  const effect = effectiveness(num);
  let result = 'basic';
  if (effect > 4) result = 'gold';
  else if (effect > 1)
    switch (effect) {
      case 2:
        result = 'bronze';
        break;
      case 3:
        result = 'platinum';
        break;
      case 4:
        result = 'gold';
        break;
      default:
    }
  return result;
};

export const stats = ['str', 'dex', 'int', 'luk'];

export const str = (num, onClick) => ({
  title: 'Strength',
  SVGIcon: BicepsSVG,
  check: true,
  rarity: rarity(num),
  lvl: effectiveness(num),
  onClick: onClick,
  noMargin: true,
  back: [
    'Examples:',
    '- detect weakness',
    '- lifting',
    '- pushing',
    '- carrying',
    '- holding'
  ]
});

export const dex = (num, onClick) => ({
  title: 'Dexterity',
  SVGIcon: SprintSVG,
  check: true,
  rarity: rarity(num),
  lvl: effectiveness(num),
  onClick: onClick,
  noMargin: true,
  back: [
    'Examples:',
    '- detect attack',
    '- jumping',
    '- reflex',
    '- catching',
    '- dodging'
  ]
});

export const int = (num, onClick) => ({
  title: 'Intelligence',
  SVGIcon: SpellBookSVG,
  check: true,
  rarity: rarity(num),
  lvl: effectiveness(num),
  onClick: onClick,
  noMargin: true,
  back: [
    'Examples:',
    '- detect curse',
    '- inspecting',
    '- reflex',
    '- catching',
    '- dodging'
  ]
});

export const luk = (num, onClick) => ({
  title: 'Luck',
  SVGIcon: CoinflipSVG,
  check: true,
  rarity: rarity(num),
  lvl: effectiveness(num),
  onClick: onClick,
  noMargin: true,
  back: [
    'Examples:',
    '- detect treasure',
    '- persuading',
    '- hiding',
    '- stealing',
    '- bargaining'
  ]
});
