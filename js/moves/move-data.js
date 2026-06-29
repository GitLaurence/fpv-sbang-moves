import splitS            from './split-s.js';
import powerLoop         from './power-loop.js';
import mattyFlip         from './matty-flip.js';
import knifeEdge         from './knife-edge.js';
import juicySpin         from './juicy-spin.js';
import trippySpin        from './trippy-spin.js';
import bowtie            from './bowtie.js';
import sbang             from './sbang.js';
import stall             from './stall.js';
import invertedYawSpin   from './inverted-yaw-spin.js';
import immelmann         from './immelmann.js';
import sbangLookback     from './sbang-lookback.js';
import rubiksCube        from './rubiks-cube.js';
import boomerang         from './boomerang.js';
import splitSRewind      from './split-s-rewind.js';
import reverseKnifeEdge  from './reverse-knife-edge.js';
import jackieChan        from './jackie-chan.js';
import halfMattyFlip     from './half-matty-flip.js';

export const MOVES = [
  // Beginner
  stall,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  halfMattyFlip,
  knifeEdge,
  bowtie,
  boomerang,
  // Advanced
  juicySpin,
  trippySpin,
  invertedYawSpin,
  splitSRewind,
  reverseKnifeEdge,
  // Pro
  sbang,
  sbangLookback,
  rubiksCube,
  jackieChan,
];

export const MOVES_CHANNEL = {
  name: 'headmazta',
  url: 'https://www.youtube.com/@headmazta',
};

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
