export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na may dagdag na yaw input habang nagpu-pull, kaya ang exit ay diretso pabalik sa landas na pinanggalingan mo — perfect para sa "rewind" na proximity shot sa parehong linya.',
  tips: [
    'Idagdag ang yaw nang sabay sa pitch pull — hindi pagkatapos, kundi kasabay',
    'Subukan munang i-master ang regular Split-S bago idagdag ang yaw component',
    'Mag-aim pabalik sa parehong landmark na pinagmulan mo para makita ang "rewind" effect',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pull + Yaw' },
    { t: 3.2,  label: 'Rewind Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — CUT throttle to ~35%, full roll snap
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted — center roll stick
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull + yaw — sustained pitch back through bottom of the S, with yaw
    // accent that turns the heading back toward the entry line
    { t: 1.25, throttle: 0.38, yaw:  0.50, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.48, yaw:  0.55, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.62, yaw:  0.50, pitch: -0.70, roll:  0.00 },
    { t: 2.5,  throttle: 0.70, yaw:  0.40, pitch: -0.40, roll:  0.00 },
    // Easing off yaw — settling onto the rewind heading
    { t: 2.85, throttle: 0.72, yaw:  0.20, pitch: -0.15, roll:  0.00 },
    // Rewind exit — now flying back along the entry line
    { t: 3.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
