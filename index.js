const FEEN = {
  dump: function(positionObject) {
    var squareStr = [];

    for (let i = 0; i < positionObject['shape'][0]; i++) {
      let empty = 0;

      for (let j = 0; j < positionObject['shape'][1]; j++) {
        var squareId = j + (i * positionObject['shape'][0]);
        var piece = positionObject['square'][squareId];

        if (piece) {
          if (empty > 0) {
            squareStr.push(empty);
            empty = 0;
          }

          squareStr.push(piece);
        } else {
          empty++;
        }
      }

      if (empty > 0) {
        squareStr.push(empty);
      }

      squareStr.push('/');
    }
    squareStr.pop();
    squareStr = squareStr.join(',');
    squareStr = squareStr.replace(/,?\/,?/g, '/');

    return [
      squareStr,
      positionObject['sideId'],
      (positionObject['inHand'].length === 0 ? '-' : positionObject['inHand'].sort().join(','))
    ].join(' ');
  },
  parse: function(feenString) {
    const fields = feenString.split(' ', 3);

    const squareStr = fields[0];
    const sideIdStr = fields[1];
    const inHandStr = fields[2];

    const numberRegex = /\d+/;
    const lengthFirstDim = squareStr.split('/')[0].split(',').map(x => (numberRegex.test(x) ? parseInt(x, 10) : 1)).reduce((a, b) => a + b);
    const squares = squareStr.split('/').map(row => row.split(',').map(cell => (numberRegex.test(cell) ? new Array(parseInt(cell, 10)).fill(null) : cell))).flat(2);
    const boardObj = {...squares};

    // NOTE remove the keys having a `null` value from the board object.
    Object.keys(boardObj).forEach((key) => (boardObj[key] == null) && delete boardObj[key]);

    const positionObject = {
      inHand: (inHandStr === '-' ? [] : inHandStr.split(',')).sort(),
      shape: [lengthFirstDim, lengthFirstDim],
      sideId: parseInt(sideIdStr, 10),
      square: boardObj
    };

    return positionObject;
  }
};

module.exports = FEEN;
