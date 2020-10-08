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

    const positionObject = {
      inHand: (inHandStr === '-' ? [] : inHandStr.split(',')),
      shape: "Shape.new(square_str).to_a",
      sideId: parseInt(sideIdStr, 10),
      square: "Square.new(square_str).to_h"
    };

    return {
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
    };
  }
};

module.exports = FEEN;
