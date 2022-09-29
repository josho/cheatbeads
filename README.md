# Cheatbeads

Cheatbeads is a framework for taking a string of text, transcoding it into a kind of binary expression, then relaying that to an emitter for handling.

One use case is to convert chess notation into morse code, then emit it wirelessly to some device smuggled onto a person, allowing them to silently receive the message (eg, through vibrations) without arousing suspicion.

It comes bundled with a Morse code transcoder and a simple console emitter, and knows standard chess notation. It will turn the UTF8 chess pieces into their ASCII equivalents by way of aliasing, allowing for better compatibility with most notation exports.


## How to use

`npm -i -D @alleyio/cheatbeads`

It's ES6, so download, fork, or whatever, and then:

```
import Cheatbeads from './cheatbeads.js';

import Hoarse from './transcoders/hoarse.js';
import Console from './transcoders/console.js';

const stimulation = new Cheatbeads({
    transcoder: new Hoarse(),
    emitter: new Console(),
});

stimulation.parse('♔b6#').emit(); // king to b6, checkmate

```


## More complex transcoders

Morse was chosen as a simple example of transcoding due to its binary state expression of `.` and `-`. If connected to a physical device, we can understand this as `off` or `on`, or perhaps a short & long vibration, respectively.

The result is still a very long series of Morse code characters, and then translated to something physical like a vibration, this becomes a time-expensive process. However, Morse could be adapted to work with 3 or more state expressions, giving more data density in a shorter amount of time.

Imagine 3 devices that accept a `off` or `on` state. If the devices were located such that the wearer could discern which device was vibrating, you could have a huge number of unique sequences. That seems impractical to memorize that many combinations, so to keep it simple, there's a demo transcoder called "Hoarse."

## Hoarse

Hoarse is a structured way to communicate chess notation through three, independently vibrating devices. The goal is to be easily understood without learning too many combinations of vibrations. For the purposes of simplicity, we'll refer to the devices as A, B, C; with the vibration duration denoted by the familiar Morse, or `.` and `-`.

- Piece names (and in one collision example, `b` or the bishop) are denoted by a `.` vibration from the B device. `B.`
- Board rows (numbered) are denoted by a `-` vibration from the A device. `A-`
- Board columns (lettered) are denoted by a `.` vibration from the A device `A.`
- Capture is `C-C-`
- Check is `A.A-B.B-C.C-A.A-B.B-C.C-A.A-B.B-C.C-A.A-B.B-C.C-`

This project contains a sample emitter for a three device setup, compatible with Hoarse.


## In close

Transcoders can utilize the physical placement of physical devices to creat common patterns of vibrations that are both easier to recognize, and create unique sensations that aid in memory building.
