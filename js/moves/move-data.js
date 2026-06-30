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

export const MOVES = [
  // Beginner
  stall,
  splitS,
  forwardFlip,
  // Intermediate
  powerLoop,
  immelmann,
  mattyFlip,
  knifeEdge,
  reverseKnifeEdge,
  splitSRewind,
  splitSStallTrack,
  // Advanced
  juicySpin,
  trippySpin,
  bowtie,
  invertedYawSpin,
  somermatty,
  maztaBounce,
  delayedFrontFlip,
  lookbackLoop,
  juicyTrackingLookback,
  // Pro
  sbang,
  sbangLookback,
  sbangTornado,
  jackieChan,
  juicyFlickRewindIys,
  ejectLookbackIys,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
