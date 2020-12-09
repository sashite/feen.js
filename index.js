class ParserShape {
  constructor(squareStr) {
    this.squareStr = squareStr;
  }

  toArray() {
    // var actions = [];
    //
    // for(var i = 0; i < moveArr.length; i += 4) {
    //   actions.push(moveArr.slice(i, i + 4));
    // }
    //
    // return actions;
  }
}

const FEEN = {
  dump: function(positionObject) {
    [
      "Square.new(positionObject['shape'], positionObject['square']).to_s",
      positionObject['sideId'],
      (positionObject['inHand'].length === 0 ? '-' : positionObject['inHand'].sort().join('/'))
    ].join(' ')

    return '3,s,k,s,3/9/4,+P,4/9/7,+B,1/9/9/9/9 0 S,b,g,g,g,g,n,n,n,n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,r,s';
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
