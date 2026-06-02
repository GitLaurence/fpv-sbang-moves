import splitS      from './split-s.js';
import powerLoop   from './power-loop.js';
import mattyFlip   from './matty-flip.js';
import knifeEdge   from './knife-edge.js';
import juicySpin   from './juicy-spin.js';
import trippySpin  from './trippy-spin.js';
import bowtie      from './bowtie.js';
import sbang       from './sbang.js';

export const MOVES = [
  splitS,
  powerLoop,
  mattyFlip,
  knifeEdge,
  juicySpin,
  trippySpin,
  bowtie,
  sbang,
];

export const LEVELS = {
  beginner:     { label: 'SIMULA',      labelFull: 'BEGINNER'     },
  intermediate: { label: 'KATAMTAMAN',  labelFull: 'INTERMEDIATE' },
  advanced:     { label: 'MAHIRAP',     labelFull: 'ADVANCED'     },
  pro:          { label: 'PROPESYONAL', labelFull: 'PRO'          },
};
