var TicTacToe = function(board) {
  this.board = board;
};

var hasWinningFormula = function(rows) {
  if (rows.every(v => v === rows[0])) {
    if (rows[0].trim() !== "") return true;
  }
  return false;
};

var hasWinningFormulaV2 = (row, value) => row.every(v => v === value);

TicTacToe.prototype.winner = function() {
  var result;
  const values = ["o", "x"]

  // row checks
  // this.board.forEach(rows => {
  //   if (hasWinningFormula(rows)) result = rows[0];
  // });

  // if (result) return result;
  for( let rowIndex in this.board ) {
    for ( let v in values) {
      if(hasWinningFormulaV2(this.board[rowIndex], values[v])) return values[v];
    }
  }

  // if(result) return result;



  // backward diagonal checks
  var diagonals = this.board.map((row, i) => row[i]);
  // var diagonals = [];
  // this.board.forEach((rows, i) => {
  //   diagonals.push(rows[i]);
  // });

  if (hasWinningFormula(diagonals)) result = diagonals[0];

  if (result) return result;

  // column checks
  for (var i = 0; i < this.board.length; i++) {
    var columns = [];
    this.board.forEach(rows => {
      columns.push(rows[i]);
    });
    if (hasWinningFormula(columns)) return columns[0];
  }

  // if (result) return result;

  // forward diagonal checks
  var _ = this.board.map((row, i) => row[row.length - 1 - i]);
  // this.board.forEach((rows, i) => {
  //   var TotalBoards = this.board.length - 1;
  //   rows.forEach((box, j) => {
  //     if (j + i === TotalBoards) {
  //       diagonals.push(box);
  //     }
  //   });
  // });

  if (hasWinningFormula(diagonals)) result = diagonals[0];

  if (result) return result;

  // unfinished check
  if(
    this.board
      .some((row) => row.some(v => v === " "))
  ) return "unfinished";

  // this.board.forEach(rows => {
  //   if (rows.some(v => v.trim() === "")) result = "unfinished";
  // });

  // if (result) return result;

  return "draw";
};

module.exports = TicTacToe;
