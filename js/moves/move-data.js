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
import diveBomb         from './dive-bomb.js';
import orbit            from './orbit.js';
import boomerang        from './boomerang.js';
import wallRide         from './wall-ride.js';
import delayedFrontFlip from './delayed-front-flip.js';
import jackieChan       from './jackie-chan.js';

export const MOVES = [
  // Beginner
  stall,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  diveBomb,
  orbit,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  boomerang,
  wallRide,
  // Pro
  sbang,
  sbangLookback,
  delayedFrontFlip,
  jackieChan,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
