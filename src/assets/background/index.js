import cafe from './cafe.gif';
import campfire from './campfire.gif';
import campfire2 from './campfire2.gif';
import campfireS1 from './sound/campfire1.wav';
import city1 from './city1.gif';
import city2 from './city2.gif';
import city3 from './city3.gif';
import field1 from './field1.gif';
import forestS1 from './sound/forest1.mp3';
import forestS2 from './sound/forest2.mp3';
import stream from './stream.gif';
import stream2 from './stream2.gif';
import stream3 from './stream3.gif';
import tavern1 from './tavern1.gif';
import tavern2 from './tavern2.gif';
import tavern3 from './tavern3.gif';
import tavernS1 from './sound/tavern1.mp3';
import waterfall2 from './waterfall2.gif';
import waterfall3 from './waterfall3.gif';
import waterfall4 from './waterfall4.gif';

const BGs = [
  { bg: cafe, sound: tavernS1 }, // 0
  { bg: city1, sound: tavernS1 }, // 1
  { bg: city2, sound: tavernS1 }, // 2
  { bg: city3, sound: tavernS1 }, // 3
  { bg: campfire, sound: campfireS1 }, // 4
  { bg: campfire2, sound: campfireS1 }, // 5
  { bg: field1, sound: forestS1 }, // 6
  { bg: stream, sound: forestS1 }, // 7
  { bg: stream2, sound: forestS1 }, // 8
  { bg: stream3, sound: forestS2 }, // 9
  { bg: waterfall2, sound: forestS1 }, // 10
  { bg: waterfall3, sound: forestS2 }, // 11
  { bg: waterfall4, sound: forestS1 }, // 12
  { bg: tavern1, sound: tavernS1 }, // 13
  { bg: tavern2, sound: tavernS1 }, // 14
  { bg: tavern3, sound: tavernS1 } // 15
];

const Scenes = {
  day: {
    forest: []
  },
  night: {
    campfire: [4, 5]
  }
};

export const getScene = (time, area, idx = -1) => {
  const target = Scenes[time][area];
  const targetIdx =
    idx === -1 ? Math.round(Math.random() * (target.length - 1)) : idx;
  // return target[Math.round(Math.random() * (target.length - 1))];
  return BGs[target[targetIdx]];
};
export const getMax = () => BGs.length - 1;
export const getBG = (idx) => BGs[idx];
