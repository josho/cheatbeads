class Cheatbeads {
  transcoder;
  emitter;


  constructor(opts) {
    if (opts) {
      if (opts.transcoder) this.transcoder = opts.transcoder;
      if (opts.emitter) this.emitter = opts.emitter;
    }
  }

  parse(notation) {
    let transcoded;

    try {
      transcoded = this.transcoder.parse(notation);
    }
    catch(err) {
      throw err;
    }

    try {
      this.emitter.setTranscoded(transcoded);
    }
    catch(err) {
      throw err;
    }

    return this.emitter;
  }
}


export default Cheatbeads;
