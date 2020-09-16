const Test = require('ava');
const FEEN = require('./index');

// Dump a classic Tsume Shogi problem

var classicTsumeShogiProblemFeen = FEEN.dump(
  active_side_id: 0,
  board: {
     3: 's',
     4: 'k',
     5: 's',
    22: '+P',
    43: '+B'
  },
  indexes: [9, 9],
  pieces_in_hand_grouped_by_sides: [
    ['S'],
    ['r', 'r', 'b', 'g', 'g', 'g', 'g', 's', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
  ]
);

Test('the active side ID', t => {
  t.true(classicTsumeShogiProblemFeen === '3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S/b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s');
});

// Parse a classic Tsume Shogi problem

var classicTsumeShogiProblemProperties = FEEN.parse('3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S/b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s');

Test('the active side ID', t => {
  t.true(classicTsumeShogiProblemProperties.activeSideId === 0);
});

Test('the board', t => {
  t.deepEqual(classicTsumeShogiProblemProperties.board === { 3: 's', 4: 'k', 5: 's', 22: '+P', 43: '+B' });
});

Test('the shape', t => {
  t.deepEqual(classicTsumeShogiProblemProperties.indexes === [9, 9]);
});

Test('the pieces in hand grouped by sides', t => {
  t.deepEqual(classicTsumeShogiProblemProperties.pieces_in_hand_grouped_by_sides === [
    ['S'],
    ['b', 'g', 'g', 'g', 'g', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'r', 's']
  ]);
});
