import splitS          from './split-s.js';
import powerLoop       from './power-loop.js';
import mattyFlip       from './matty-flip.js';
import knifeEdge       from './knife-edge.js';
import juicySpin       from './juicy-spin.js';
import trippySpin      from './trippy-spin.js';
import bowtie          from './bowtie.js';
import sbang           from './sbang.js';
import stall           from './stall.js';
import invertedYawSpin from './inverted-yaw-spin.js';
import immelmann       from './immelmann.js';
import sbangLookback   from './sbang-lookback.js';
import jackieChan      from './jackie-chan.js';
import somerMatty      from './somer-matty.js';
import delayedFrontFlip540 from './delayed-front-flip-540.js';

export const MOVES = [
  // Beginner
  stall,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  jackieChan,
  // Pro
  sbang,
  sbangLookback,
  somerMatty,
  delayedFrontFlip540,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
