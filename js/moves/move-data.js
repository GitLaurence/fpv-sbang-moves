import splitS                from './split-s.js';
import powerLoop              from './power-loop.js';
import mattyFlip              from './matty-flip.js';
import knifeEdge              from './knife-edge.js';
import juicySpin              from './juicy-spin.js';
import trippySpin             from './trippy-spin.js';
import bowtie                 from './bowtie.js';
import sbang                  from './sbang.js';
import stall                  from './stall.js';
import invertedYawSpin        from './inverted-yaw-spin.js';
import immelmann              from './immelmann.js';
import sbangLookback          from './sbang-lookback.js';
import forwardFlip            from './forward-flip.js';
import reverseKnifeEdge       from './reverse-knife-edge.js';
import splitSRewind           from './split-s-rewind.js';
import somermatty             from './somermatty.js';
import maztaBounce            from './mazta-bounce.js';
import sbangTornado           from './sbang-tornado.js';
import jackieChan             from './jackie-chan.js';
import splitSStallTrack       from './split-s-stall-track.js';
import delayedFrontFlip       from './delayed-front-flip.js';
import lookbackLoop           from './lookback-loop.js';
import juicyTrackingLookback  from './juicy-tracking-lookback.js';
import juicyFlickRewindIys    from './juicy-flick-rewind-iys.js';
import ejectLookbackIys       from './eject-lookback-iys.js';
import roll                   from './roll.js';
import halfMattyFlip          from './half-matty-flip.js';
import iysRewind              from './iys-rewind.js';
import splitSYawSpin          from './split-s-yaw-spin.js';
import rapidLookbackDoubleRoll from './rapid-lookback-double-roll.js';
import coinDrop               from './coin-drop.js';
import sidewaysRewind         from './sideways-rewind.js';
import corkscrew              from './corkscrew.js';
import reverseWallRide        from './reverse-wall-ride.js';
import barani                 from './barani.js';
import trackingFrontFlip      from './tracking-front-flip.js';
import flipRollIysCombo       from './flip-roll-iys-combo.js';
import flipRewindIys          from './flip-rewind-iys.js';
import sideLookbackIys        from './side-lookback-iys.js';
import lookbackRollIys        from './lookback-roll-iys.js';

export const MOVES = [
  // Beginner
  stall,
  roll,
  splitS,
  forwardFlip,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  halfMattyFlip,
  knifeEdge,
  reverseKnifeEdge,
  splitSRewind,
  sidewaysRewind,
  splitSStallTrack,
  corkscrew,
  trackingFrontFlip,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  iysRewind,
  somermatty,
  maztaBounce,
  delayedFrontFlip,
  lookbackLoop,
  rapidLookbackDoubleRoll,
  juicyTrackingLookback,
  splitSYawSpin,
  reverseWallRide,
  barani,
  sideLookbackIys,
  // Pro
  sbang,
  sbangLookback,
  sbangTornado,
  jackieChan,
  juicyFlickRewindIys,
  ejectLookbackIys,
  coinDrop,
  flipRollIysCombo,
  flipRewindIys,
  lookbackRollIys,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
