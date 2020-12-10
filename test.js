const { test } = require('uvu');
const assert = require('uvu/assert');
const FEEN = require('./index');

// Dump a classic Tsume Shogi problem

test('the dumped position', () => {
  const feenString = FEEN.dump({
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

  assert.is(feenString, '3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S,b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s');
});

// Parse a classic Tsume Shogi problem

test('the parsed position', () => {
  const positionObject = FEEN.parse('3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S,b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s');

  assert.equal(positionObject, {
    inHand: ['S', 'b', 'g', 'g', 'g', 'g', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 's'],
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
});

test.run();
