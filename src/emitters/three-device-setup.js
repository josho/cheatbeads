import Emitter from '../emitter.js';


class ThreeDeep extends Emitter {
  name = 'threeDeep';

  devices = [];


  constructor(opts) {
    super(opts);

    const device = new Device();

    // load three blank generic devices
    for (let i = 0; i < 3; i++) {
      this.devices.push(
        Object.assign(Object.create(Object.getPrototypeOf(device)))
      );
    }
  }

  // compatible with hoarse
  async handle(char) {
    if (char === ' ') {
      process.stdout.write(' / ');
      await this.pause();
      return;
    }

    if (/[01]/.test(char)) {
      return await this.devices[0].handle(char);
    }
    else if (/[23]/.test(char)) {
      return await this.devices[1].handle(char);
    }
    else if (/[45]/.test(char)) {
      return await this.devices[2].handle(char);
    }
  }
}


class Device {
  async handle(char) {
    switch (String(char)) {

      case '0':
        process.stdout.write('Abuzz'); // or send signal to port
        break;

      case '1':
        process.stdout.write('Abuzzzzz');
        break;

      case '2':
        process.stdout.write('Bbuzz');
        break;

      case '3':
        process.stdout.write('Bbuzzzzz');
        break;

      case '4':
        process.stdout.write('Cbuzz');
        break;

      case '5':
        process.stdout.write('Cbuzzzzz');
        break;

      default:
    }
  }
}



export default ThreeDeep;
