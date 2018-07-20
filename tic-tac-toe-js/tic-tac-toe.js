let TicTacToe = function(board) {
  "use strict";

  this.board = board;
};

TicTacToe.prototype.winner = function() {

  // Check the dimensions of the board.
  let numberOfRows = this.board.length;

  // Print the board from the tests.
  // this.printBoard(numberOfRows);

  // Store the rows and columns.
  let rows = this.getRows(numberOfRows);
  let columns = this.getColumns(rows);

  return this.checkWinner(rows, columns);
};

// Helper function to store the rows on the board.
TicTacToe.prototype.getRows = function(size) {
  let rows = [];

  // Populate the row arrays.
  for (let i = 0; i < size; i++) {
    let row = [];

    for (let j = 0; j < size; j++) {
      row.push(this.board[i][j]);
    }

    rows.push(row);
  }

  return rows;
};

// Helper function to store the columns on the board.
TicTacToe.prototype.getColumns = (rows) => {
  let columns = [];

  // Initialize the columns arrays.
  rows.forEach(() => {
    columns.push([]);
  });

  // Populate the column arrays.
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      columns[j][i] = rows[i][j];
    }
  }

  return columns;
};

// Determines the outcome.
TicTacToe.prototype.checkWinner = function(rows, columns) {
  let row1 = this.board[0];
  let row2 = this.board[1];
  let row3 = this.board[2];

  // Check the rows for any winners.
  let rowWinner = this.checkRows(rows);

  // column checks

  if (row1[0] == "o" && row2[0] == "o" && row3[0] == "o") {
    return "o";
  }

  if (row1[1] == "o" && row2[1] == "o" && row3[1] == "o") {
    return "o";
  }

  if (row1[2] == "o" && row2[2] == "o" && row3[2] == "o") {
    return "o";
  }

  if (row1[0] == "x" && row2[0] == "x" && row3[0] == "x") {
    return "x";
  }

  if (row1[1] == "x" && row2[1] == "x" && row3[1] == "x") {
    return "x";
  }

  if (row1[2] == "x" && row2[2] == "x" && row3[2] == "x") {
    return "x";
  }

  // diagonal checks

  if (row1[0] == "o" && row2[1] == "o" && row3[2] == "o") {
    return "o";
  }

  if (row1[2] == "o" && row2[1] == "o" && row3[0] == "o") {
    return "o";
  }

  if (row1[0] == "x" && row2[1] == "x" && row3[2] == "x") {
    return "x";
  }

  if (row1[2] == "x" && row2[1] == "x" && row3[0] == "x") {
    return "x";
  }

  if (rowWinner === "o") {
    return "o";
  } else if (rowWinner === "x") {
    return "x";
  }

  return "draw";
};

TicTacToe.prototype.checkRows = function(rows) {
  let outcome = "unfinished";

  for (let i in rows) {
    // console.log(rows[i]);

    let checkRowsForO = rows[i].every((value, index, array) => {
      return value === "o";
    });

    if (checkRowsForO) {
      outcome = "o";
    }

    let checkRowsForX = rows[i].every((value, index, array) => {
      return value === "x";
    });

    if (checkRowsForX) {
      outcome = "x";
    }
  }

  return outcome;
};

// Helper function for printing the board.
TicTacToe.prototype.printBoard = function(size) {
  console.log("Printing the board...");

  for (let i = 0; i < size; i++) {
    let row = this.board[i];
    console.log(row.toString());
  }
};

module.exports = TicTacToe;
