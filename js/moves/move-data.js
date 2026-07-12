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
import halfMattyFlip   from './half-matty-flip.js';
import reverseKnifeEdge from './reverse-knife-edge.js';
import diveBuilding    from './dive-building.js';
import vannyRoll       from './vanny-roll.js';
import maztaBounce     from './mazta-bounce.js';
import reverseWallRide from './reverse-wall-ride.js';
import jackieChan      from './jackie-chan.js';

export const MOVES = [
  // Beginner
  stall,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  halfMattyFlip,
  reverseKnifeEdge,
  diveBuilding,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  vannyRoll,
  maztaBounce,
  reverseWallRide,
  // Pro
  sbang,
  sbangLookback,
  jackieChan,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
