import Transcoder from '../transcoder.js'


/*
  transcoder for three independent devices with 0 and 1 signals
 */
class Hoarse extends Transcoder {
  name = 'hoarse';

  attention = '012345';
  extraAttention = `${this.attention}43210`;

  /*
    0, 1 = device A
    2, 3 = device B
    4, 5 = device C
  */

  map = {
    0: '1000',

    // board
    1: '10',
    2: '11',
    3: '12',
    4: '13',
    5: '14',
    6: '15',
    7: '101',
    8: '102',

    a: '02',
    b: '03',
    c: '04',
    d: '05',
    e: '020',
    f: '030',
    g: '040',
    h: '050',

    // pieces
    k: '30',
    q: '31',
    r: '32',
    n: '33',
    p: '34',

    // actions/special
    x: '55',
    '!': this.attention,
    '?': '00',
    '+': this.attention.repeat(4),
    '&': this.extraAttention.repeat(42), // replacement for #, checkmate
    '-': '0000',
  };


  constructor(opts) {
    super(opts);
  }
}


export default Hoarse;
