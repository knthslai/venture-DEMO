import { useContext } from 'react';
import { AllForOneSVG, SpellBookSVG } from '../../assets/icons';
import { CardsOverlay, Column } from '../../components';
import { SceneContext } from '../../contexts/Scene';

export default function Role() {
  const { setPage } = useContext(SceneContext);

  return (
    <Column style={{ height: '100vh' }}>
      <CardsOverlay
        cards={[
          {
            title: 'Run a campaign',
            SVGIcon: SpellBookSVG,
            rarity: 'yellowgold',
            back: [
              '- Start a story for your friends!',
              '- You will be in charge of the cards, scenario, dialogues and scenes'
            ],
            onClick: () => setPage('/master')
          },
          {
            title: 'Join a campaign',
            SVGIcon: AllForOneSVG,
            rarity: 'platinum',
            back: [
              '- Fight along side your friends!',
              '- You can create, customize and pick characters'
            ],
            onClick: () => setPage('/player')
          }
        ]}
      />
    </Column>
  );
}
