import Cheatbeads from './cheatbeads.js';

import Morse from './transcoders/morse.js';
import Console from './emitters/console.js';

import Hoarse from './transcoders/hoarse.js';
import ThreeDeep from './emitters/three-device-setup.js';


/*
  simple morse code to console
*/
const stimulation = new Cheatbeads({
  transcoder: new Morse(),
  emitter: new Console(),
});

/*
  simple morse code to console
*/
const stimulation3 = new Cheatbeads({
  transcoder: new Hoarse(),
  emitter: new ThreeDeep(),
});


// knight to b6, check
console.log('Morse code');
await stimulation.parse('Kb6+').emit();

console.log(`\nHoarse code`);
await stimulation3.parse('Kb6+').emit();
