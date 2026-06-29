import flips             from './flips.js';
import rolls             from './rolls.js';
import stall             from './stall.js';
import splitS            from './split-s.js';
import orbits            from './orbits.js';
import flipToRoll        from './flip-to-roll.js';
import powerLoop         from './power-loop.js';
import halfMattyFlip     from './half-matty-flip.js';
import mattyFlip         from './matty-flip.js';
import buildingDive      from './building-dive.js';
import reverseWallRide   from './reverse-wall-ride.js';
import trackingFrontFlip from './tracking-front-flip.js';
import bowtie            from './bowtie.js';
import juicySpin         from './juicy-spin.js';
import trippySpin        from './trippy-spin.js';
import invertedYawSpin   from './inverted-yaw-spin.js';
import rubiksCube        from './rubiks-cube.js';
import splitSRewind      from './split-s-rewind.js';
import sidewaysRewind    from './sideways-rewind.js';
import jackieChan        from './jackie-chan.js';
import maztaBounce       from './mazta-bounce.js';
import sbang             from './sbang.js';
import sbangLookback     from './sbang-lookback.js';
import sbangTornado      from './sbang-tornado.js';
import laserFlip         from './laser-flip.js';

export const MOVES = [
  // Beginner
  flips,
  rolls,
  stall,
  splitS,
  orbits,
  // Intermediate
  flipToRoll,
  powerLoop,
  halfMattyFlip,
  mattyFlip,
  buildingDive,
  reverseWallRide,
  trackingFrontFlip,
  // Advanced
  bowtie,
  juicySpin,
  trippySpin,
  invertedYawSpin,
  rubiksCube,
  splitSRewind,
  sidewaysRewind,
  jackieChan,
  maztaBounce,
  // Pro
  sbang,
  sbangLookback,
  sbangTornado,
  laserFlip,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
