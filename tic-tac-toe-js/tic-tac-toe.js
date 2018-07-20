var TicTacToe = function(board) {
  "use strict";

  this.board = board;
};

TicTacToe.prototype.winner = function() {

  // Check the dimensions of the board.
  var numberOfRows = this.board.length;

  // Print the board
  // this.printBoard(numberOfRows);

  // Store the rows and columns.
  var rows = this.getRows(numberOfRows);
  var columns = this.getColumns(rows);

  return this.checkWinner(rows, columns);
};

// Helper function to store the rows on the board.
TicTacToe.prototype.getRows = function(size) {
  var rows = [];

  // Populate the row arrays.
  for (var i = 0; i < size; i++) {
    var row = [];

    for (var j = 0; j < size; j++) {
      row.push(this.board[i][j]);
    }

    rows.push(row);
  }

  return rows;
};

// Helper function to store the columns on the board.
TicTacToe.prototype.getColumns = (rows) => {
  var columns = [];

  // Initialize the columns arrays.
  rows.forEach(() => {
    columns.push([]);
  });

  // Populate the column arrays.
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      columns[j][i] = rows[i][j];
    }
  }

  return columns;
};

// Determines the outcome.
TicTacToe.prototype.checkWinner = function(rows, columns) {
  var row1 = this.board[0];
  var row2 = this.board[1];
  var row3 = this.board[2];

  if (row1[0] == "o" && row1[1] == "o" && row1[2] == "o") {
    return "o";
  }

  if (row2[0] == "o" && row2[1] == "o" && row2[2] == "o") {
    return "o";
  }

  if (row3[0] == "o" && row3[1] == "o" && row3[2] == "o") {
    return "o";
  }

  if (row1[0] == "x" && row1[1] == "x" && row1[2] == "x") {
    return "x";
  }

  if (row2[0] == "x" && row2[1] == "x" && row2[2] == "x") {
    return "x";
  }

  if (row3[0] == "x" && row3[1] == "x" && row3[2] == "x") {
    return "x";
  }

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

  return "draw";
};

// Helper function for printing the board.
TicTacToe.prototype.printBoard = function(size) {
  console.log("Printing the board...");

  for (var i = 0; i < size; i++) {
    var row = this.board[i];
    console.log(row.toString());
  }
};

module.exports = TicTacToe;
