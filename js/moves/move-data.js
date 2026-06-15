import splitS          from './split-s.js';
import powerLoop       from './power-loop.js';
import powerLoopVert   from './power-loop-vertical.js';
import smoothRoll      from './smooth-roll.js';
import mattyFlip       from './matty-flip.js';
import knifeEdge       from './knife-edge.js';
import juicySpin       from './juicy-spin.js';
import trippySpin      from './trippy-spin.js';
import bowtie          from './bowtie.js';
import boomerang       from './boomerang.js';
import sbang           from './sbang.js';
import stall           from './stall.js';
import invertedYawSpin from './inverted-yaw-spin.js';
import immelmann       from './immelmann.js';
import sbangLookback   from './sbang-lookback.js';

export const MOVES = [
  // Beginner
  stall,
  smoothRoll,
  splitS,
  powerLoopVert,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  boomerang,
  invertedYawSpin,
  // Pro
  sbang,
  sbangLookback,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
