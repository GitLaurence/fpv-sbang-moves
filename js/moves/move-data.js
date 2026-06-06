import splitS           from './split-s.js';
import powerLoop        from './power-loop.js';
import mattyFlip        from './matty-flip.js';
import knifeEdge        from './knife-edge.js';
import halfMatty        from './half-matty.js';
import reverseKnifeEdge from './reverse-knife-edge.js';
import juicySpin        from './juicy-spin.js';
import trippySpin       from './trippy-spin.js';
import bowtie           from './bowtie.js';
import invertedYawSpin  from './inverted-yaw-spin.js';
import delayedFrontFlip from './delayed-front-flip.js';
import splitSRewind     from './split-s-rewind.js';
import maztaBounce      from './mazta-bounce.js';
import vannyRoll        from './vanny-roll.js';
import juicyCartwheel   from './juicy-cartwheel.js';
import sbang            from './sbang.js';
import stall            from './stall.js';
import immelmann        from './immelmann.js';
import sbangLookback    from './sbang-lookback.js';
import jackieChan       from './jackie-chan.js';
import somerMatty       from './somer-matty.js';

// All YouTube video IDs reference headmazta's NTTT (No Talking Trick Tutorial) channel.
export const MOVES = [
  // Beginner
  stall,
  splitS,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  halfMatty,
  reverseKnifeEdge,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  delayedFrontFlip,
  splitSRewind,
  maztaBounce,
  vannyRoll,
  juicyCartwheel,
  // Pro
  sbang,
  sbangLookback,
  jackieChan,
  somerMatty,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
