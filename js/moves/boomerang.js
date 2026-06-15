export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Curved na flight path papunta sa kabilang banda at pabalik, pero pareho ang facing direction ng drone sa buong move — roll at pitch ang nag-a-arc ng landas, habang ang yaw ang nagpapanatili ng orientation.',
  tips: [
    'Roll input ang nagdidikta ng curve ng landas — yaw ay para sa orientation lang, hindi para sa pag-ikot',
    'Magdagdag ng counter-yaw para hindi mag-rotate ang nose habang nag-a-arc ang flight path',
    'Pantay ang bilis sa pagpunta at pagbalik — i-mirror ang input sa unang kalahati at sa ikalawa',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Arc Out' },
    { t: 1.8, label: 'Apex' },
    { t: 2.7, label: 'Arc Back' },
    { t: 4.0, label: 'Return' },
    { t: 4.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Arc out — roll into the curve, counter-yaw holds heading, slight pitch up
    { t: 0.5,  throttle: 0.75, yaw: -0.45, pitch: -0.30, roll:  0.70 },
    { t: 1.0,  throttle: 0.78, yaw: -0.55, pitch: -0.35, roll:  0.80 },
    // Apex of the arc — widest part of the curve
    { t: 1.8,  throttle: 0.75, yaw: -0.55, pitch: -0.25, roll:  0.55 },
    // Arc back — mirror the roll/yaw to curve back toward start
    { t: 2.7,  throttle: 0.78, yaw:  0.55, pitch: -0.35, roll: -0.80 },
    { t: 3.4,  throttle: 0.75, yaw:  0.50, pitch: -0.30, roll: -0.70 },
    // Return leg — easing back to level
    { t: 4.0,  throttle: 0.68, yaw:  0.15, pitch: -0.10, roll: -0.25 },
    // Exit — level flight, facing original direction
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
