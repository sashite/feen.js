# FEEN.js

[![Build Status](https://travis-ci.org/sashite/feen.js.svg?branch=master)](https://travis-ci.org/sashite/feen.js)

> __FEEN__ (Forsyth–Edwards Expanded Notation) support for the JavaScript language.

## Overview

This is an implementation of [FEEN](https://developer.sashite.com/specs/forsyth-edwards-expanded-notation), a generic format that can be used for serializing and deserializing chess positions.

The main chess variants are supported, including [Chess](https://en.wikipedia.org/wiki/Chess), [Janggi](https://en.wikipedia.org/wiki/Janggi), [Makruk](https://en.wikipedia.org/wiki/Makruk), [Shogi](https://en.wikipedia.org/wiki/Shogi), [Xiangqi](https://en.wikipedia.org/wiki/Xiangqi).

More exotic variants are also supported, like: [Dai dai shogi](https://en.wikipedia.org/wiki/Dai_dai_shogi), [Four-player chess](https://en.wikipedia.org/wiki/Four-player_chess), or [Three-dimensional chess](https://en.wikipedia.org/wiki/Three-dimensional_chess) 🖖

![3D chess on Star Trek (from the episode "Court Martial")](https://github.com/sashite/feen.rb/raw/master/star-trek-chess.jpg)

## Installation

```shell
npm install @sashite/feen
```

## Usage

```javascript
// Dump a classic Tsume Shogi problem
FEEN.dump({
  inHand: ['S', 'r', 'r', 'b', 'g', 'g', 'g', 'g', 's', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  shape: [9, 9],
  sideId: 0,
  square: {
     3: 's',
     4: 'k',
     5: 's',
    22: '+P',
    43: '+B'
  }
});
// => '3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S,b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s'

// Parse a classic Tsume Shogi problem
FEEN.parse("3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S,b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s");
// => {
//      inHand: ['S', 'r', 'r', 'b', 'g', 'g', 'g', 'g', 's', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//      shape: [9, 9],
//      sideId: 0,
//      square: {
//         3: 's',
//         4: 'k',
//         5: 's',
//        22: '+P',
//        43: '+B'
//      }
//    }
```

## TODO

- [ ] Mort than two dimensions board support
- [ ] More than two players support

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## About Sashite

This [package](https://www.npmjs.com/package/@sashite/feen) is maintained by [Sashite](https://sashite.com/).

With some [lines of code](https://github.com/sashite/), let's share the beauty of Chinese, Japanese and Western cultures through the game of chess!
