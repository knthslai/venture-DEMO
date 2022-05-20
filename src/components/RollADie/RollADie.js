import Errors from './Types';
import sound from './nc93322.mp3';

const dieInDOM = [];
function verifyParams(options) {
  const { numberOfDice, callback, element, delay, values, soundVolume } =
    options;
  if (!element) throw new Error(Errors.MISSING_ELEMENT);
  if (!(element instanceof HTMLElement))
    throw new Error(Errors.INVALID_ELEMENT);

  if (!numberOfDice) throw new Error(Errors.MISSING_NUMBER_OF_DICE);
  if (typeof numberOfDice !== 'number')
    throw new Error(Errors.NUMBER_OF_DICE_NUMBER);

  if (!Number.isInteger(numberOfDice))
    throw new Error(Errors.NUMBER_OF_DICE_INTEGER);

  if (!callback) throw new Error(Errors.MISSING_CALLBACK);
  if (typeof callback !== 'function') throw new Error(Errors.INVALID_CALLBACK);

  if (delay && typeof delay !== 'number')
    throw new Error(Errors.INVALID_DELAY_TYPE);

  if (values) {
    if (!Array.isArray(values)) throw new Error(Errors.INVALID_VALUES);
    if (values.length !== numberOfDice)
      throw new Error(Errors.INVALID_VALUES_LENGTH);
    values.forEach((value) => {
      if (typeof value !== 'number')
        throw new Error(Errors.INVALID_VALUE_NUMBER(value));
      if (!Number.isInteger(value))
        throw new Error(Errors.INVALID_VALUE_INTEGER(value));
    });
  }

  if (typeof soundVolume !== 'number')
    throw new Error(Errors.INVALID_SOUND_VOLUME);
  if (soundVolume < 0 || soundVolume > 1)
    throw new Error(Errors.INVALID_SOUND_VOLUME);
}

function playSound(outerContainer, soundVolume) {
  if (soundVolume === 0) return;
  const audio = document.createElement('audio');
  outerContainer.appendChild(audio);
  audio.src = sound;
  audio.volume = soundVolume;
  audio.play();
  audio.onended = () => {
    audio.remove();
  };
}

function getFace(pips) {
  const XMLNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(XMLNS, 'svg');
  svg.setAttribute('class', 'dice-face');
  svg.setAttribute('width', 50);
  svg.setAttribute('height', 50);

  pips
    .map(function (pip) {
      const circle = document.createElementNS(XMLNS, 'circle');
      Object.keys(pip).forEach((key) => circle.setAttribute(key, pip[key]));
      return circle;
    })
    .forEach((circle) => svg.appendChild(circle));

  return svg;
}

function appendDieContainers(dieId, element, angle) {
  const outer = document.createElement('div');
  outer.className = 'dice-outer';
  outer.id = dieId;
  element.appendChild(outer);

  const dice = document.createElement('div');
  dice.className = 'dice';
  dice.style.transform = `rotateX(${angle[0]}deg) rotateZ(${angle[1]}deg)`;
  outer.appendChild(dice);
  return dice;
}

export function removeDieFromDOM(dieId) {
  const removeElement = document.getElementById(dieId);
  if (removeElement) {
    removeElement.className = 'remove-dice';
    setTimeout(() => {
      removeElement.remove();
    }, 1000);
  }
}

const rollADie = function (options) {
  const { numberOfDice, callback, element, values, soundVolume = 1 } = options;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let delay = options.delay || 3000;
  verifyParams({ ...options, soundVolume });
  const result = [];
  playSound(element, soundVolume);

  for (let i = 0; i < numberOfDice; i++) {
    const dieFace = values ? values[i] : Math.floor(Math.random() * 6) + 1;
    result.push(dieFace);
    const angle = {
      1: [90, 0],
      2: [0, 90],
      3: [180, 0],
      4: [0, 0],
      5: [0, -90],
      6: [-90, 0]
    }[dieFace];
    const dieId = `${Math.random() * 10}-${dieFace}`;
    dieInDOM.push(dieId);
    const dice = appendDieContainers(dieId, element, angle, dieFace);
    [
      [{ cx: 24, cy: 24, r: 10, fill: 'red' }],
      [
        { cx: 12, cy: 12, r: 5 },
        { cx: 36, cy: 36, r: 5 }
      ],
      [
        { cx: 12, cy: 12, r: 5 },
        { cx: 24, cy: 24, r: 5 },
        { cx: 36, cy: 36, r: 5 }
      ],
      [
        { cx: 12, cy: 12, r: 5 },
        { cx: 36, cy: 36, r: 5 },
        { cx: 12, cy: 36, r: 5 },
        { cx: 36, cy: 12, r: 5 }
      ],
      [
        { cx: 12, cy: 12, r: 5 },
        { cx: 24, cy: 24, r: 5 },
        { cx: 36, cy: 36, r: 5 },
        { cx: 12, cy: 36, r: 5 },
        { cx: 36, cy: 12, r: 5 }
      ],
      [
        { cx: 12, cy: 12, r: 5 },
        { cx: 36, cy: 36, r: 5 },
        { cx: 12, cy: 24, r: 5 },
        { cx: 36, cy: 24, r: 5 },
        { cx: 12, cy: 36, r: 5 },
        { cx: 36, cy: 12, r: 5 }
      ]
    ]
      .map(getFace)
      .forEach((face) => dice.appendChild(face));

    if (result.length === numberOfDice && callback) {
      callback(result);
    }
    if (!options.noDelay) setTimeout(() => removeDieFromDOM(dieId), delay);
    else return dieId;
  }
};

export default rollADie;
