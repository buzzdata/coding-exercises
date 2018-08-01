var TicTacToe = function(board) {
  this.board = board;
};

var hasWinningFormula = function(boxes) {
  if ( boxes.every(v => v === boxes[0]) ) {
    if ( boxes[0].trim() !== "" ) return true;
  }
  return false;
}

TicTacToe.prototype.winner = function() {
  var result;

  // row checks
  this.board.forEach((boxes) => {
    if ( hasWinningFormula(boxes) ) result = boxes[0];
  });

  if (result) return result;

  // backward diagonal checks
  var diagonals = [];
  this.board.forEach( (boxes, i) => {
    diagonals.push(boxes[i]);
  });

  if ( hasWinningFormula(diagonals) ) result = diagonals[0];

  if (result) return result;

  // column checks
  for( var i = 0; i < this.board.length;i++) {
    var columns = [];
    this.board.forEach( (boxes) => {
      columns.push(boxes[i]);
    });
    if ( hasWinningFormula(columns) ) result = columns[0];
  }

  if (result) return result;

  // forward diagonal checks
  var diagonals = [];
  this.board.forEach( (boxes, i) => {
    var TotalBoards = this.board.length - 1;
    boxes.forEach((box, j) => {
      if( j + i === TotalBoards ) {
        diagonals.push(box);
      }
    })
  });

  if ( hasWinningFormula(diagonals) ) result = diagonals[0];

  if(result) return result;

  // draw check
  this.board.forEach(boxes => {
    if ( boxes.some(v => v.trim() === "") ) result = "unfinished"
  });

  if (result) return result;

  return "draw";
};

module.exports = TicTacToe;
