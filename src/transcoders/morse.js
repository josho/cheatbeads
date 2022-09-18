import Transcoder from '../transcoder.js'


class Morse extends Transcoder {
  name = 'morse';

  map = {
    0: '11111',

    // board
    1: '01111',
    2: '00111',
    3: '00011',
    4: '00001',
    5: '00000',
    6: '10000',
    7: '11000',
    8: '11100',
    a: '01',
    b: '1000',
    c: '1010',
    d: '100',
    e: '0',
    f: '0010',
    g: '110',
    h: '0000',

    // pieces
    k: '101',
    q: '1101',
    r: '010',
    n: '10',
    p: '0110',

    // actions/special
    x: '1001',
    '!': '101011',
    '?': '001100',
    '+': '01010',
    '&': '01000', // replacement for #
    '-': '100001',
  };


  constructor(opts) {
    super(opts);
  }
}


export default Morse;
