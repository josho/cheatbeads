class Transcoder {
  // extend me
  name = 'template';

  // what separates each character
  separator = ' ';

  // define the map of supported characters => signals here (defined by 0 and 1)
  // the signals could be more "bits" if you have more devices, but you'd
  // want to create those codes
  map = {
    0: '',

    // board
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',

    // pieces
    k: '',
    q: '',
    r: '',
    n: '',
    p: '',

    // actions/special
    x: '',
    '!': '',
    '?': '',
    '+': '',
    '&': '',
    '-': '',
  };

  // aliases to help if needed
  aliases = {
    k: ['♔', '♚'],
    q: ['♕', '♛'],
    r: ['♖', '♜'],
    b: ['♗', '♝'],
    n: ['♘', '♞'],
    p: ['♙', '♟'],
  };


  constructor(opts) {
    if (opts) {
      if (opts.separator) this.separator = opts.separator;
    }

    for (const [key, values] of Object.entries(this.aliases)) {
      values.forEach(item => {
        this.map[item] = this.map[key];
      });
    }

    delete this.aliases;
  }

  parse(notation) {
    let transcoded = [];

    for (let i = 0; i < String(notation).length; i++) {
      const char = notation[i].toLowerCase();

      if (typeof this.map[char] !== 'undefined') {
        if (char === '#') char = '&';

        transcoded.push(this.map[char]);
      }
    }

    return transcoded.join(this.separator);
  }
}


export default Transcoder;
