class Emitter {
  name = 'template';
  sleep = 250; // ms, how briefly to pause between characters

  transcoded; // holds string from a transcoder


  constructor(opts) {
    if (opts) {
      if (opts.sleep) this.sleep = parseInt(opts.sleep);
    }
  }

  // can overload to do other processing
  setTranscoded(transcoded) {
    this.transcoded = transcoded;
  }

  pause() {
    return new Promise(resolve => {
      setTimeout(resolve, this.sleep);
    });
  }

  async emit() {
    if (!this.transcoded || !String(this.transcoded).length) {
      throw 'nothing to emit';
    }

    for (let i = 0; i < String(this.transcoded).length; i++) {
      await this.handle(this.transcoded[i]);
    }
  }

  // this takes one character as input and decides what to do with it
  async handle(char) {
    console.log(char);
  }
}


export default Emitter;
