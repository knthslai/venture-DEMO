import {
  PocketBowSVG,
  SaberAndPistolSVG,
  SwordsEmblemSVG,
  WizardStaffSVG
} from '../assets/icons';

export const Archer = {
  title: 'Archer',
  SVGIcon: PocketBowSVG,
  rarity: 'yellowgold',
  noMargin: true,
  back: [
    '- One shot, one kill. With a keen eye you will see what others miss.',
    '- Perceptive, Ranged, Burst Damage'
  ],
  initialStats: {
    str: 6,
    dex: 10,
    int: 4,
    luk: 2
  }
};
export const Rogue = {
  title: 'Rogue',
  SVGIcon: SaberAndPistolSVG,
  rarity: 'yellowgold',
  noMargin: true,
  back: [
    '- Winning is all that matters! Jack of all trades, high risk, high rewards.',
    '- Lady Luck, Melee and Ranged, Quick light movements'
  ],
  initialStats: {
    str: 5,
    dex: 5,
    int: 2,
    luk: 10
  }
};
export const Swordsman = {
  title: 'Swordsman',
  SVGIcon: SwordsEmblemSVG,
  rarity: 'yellowgold',
  noMargin: true,
  back: [
    '- Swing first, talk later! Lives for the challenge, no flinching!',
    '- Fortitude, Melee, Abnormally strong'
  ],
  initialStats: {
    str: 10,
    dex: 6,
    int: 2,
    luk: 4
  }
};
export const Mage = {
  title: 'Mage',
  SVGIcon: WizardStaffSVG,
  rarity: 'yellowgold',
  noMargin: true,
  back: [
    '- The true fight is with your mind! With the right know how anything is possible',
    '- Walking dictionary, Melee and Ranged, Pragmatic'
  ],
  initialStats: {
    str: 3,
    dex: 4,
    int: 10,
    luk: 5
  }
};

export const classesList = [Archer, Rogue, Swordsman, Mage];
