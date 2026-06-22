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
import rollSmoothly      from './roll-smoothly.js';
import rubiksCube        from './rubiks-cube.js';
import barani            from './barani.js';
import halfMattyFlip     from './half-matty-flip.js';
import maztaBounce       from './mazta-bounce.js';
import jackieChan        from './jackie-chan.js';
import delayedFrontFlip  from './delayed-front-flip.js';
import splitSRewind      from './split-s-rewind.js';
import sbangTornado      from './sbang-tornado.js';
import somerMatty        from './somer-matty.js';

export const MOVES = [
  // Beginner
  stall,
  rollSmoothly,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  halfMattyFlip,
  knifeEdge,
  barani,
  rubiksCube,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  maztaBounce,
  jackieChan,
  delayedFrontFlip,
  splitSRewind,
  // Pro
  sbang,
  sbangLookback,
  sbangTornado,
  somerMatty,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
