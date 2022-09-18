import Emitter from '../emitter.js';


class Console extends Emitter {
  name = 'console';


  constructor(opts) {
    super(opts);
  }

  async handle(char) {
    switch (char) {

      case '0':
        process.stdout.write('buzz');
        break;

      case '1':
        process.stdout.write('buzzzz');
        break;

      case ' ':
        process.stdout.write(' / ');
        await this.pause();
        break;

      default:
    }
  }
}


export default Console;
