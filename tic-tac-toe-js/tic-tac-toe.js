class TicTacToe {
  constructor(board) {
    this.board = board;
  }
}

// Determines the winner of the game.
TicTacToe.prototype.winner = function() {
  "use strict";

  // Get the rows, columns and diagonals.
  let length = this.board.length;
  let rows = this.getRows(length);
  let columns = this.getColumns(rows);
  let diagonals = this.getDiagonals(rows);

  return this.checkOutcomes(rows, columns, diagonals);
};

// Determines the outcome.
TicTacToe.prototype.checkOutcomes = function(rows, columns, diagonals) {
  let outcome = "";

  // Check the rows for any winners.
  outcome = this.checkArrayWinners(rows);

  if (outcome !== "o" && outcome !== "x") {
    // Check the columns for any winners.
    outcome = this.checkArrayWinners(columns);
  }

  if (outcome !== "o" && outcome !== "x") {
    // Check the diagonals for any winners.
    outcome = this.checkArrayWinners(diagonals);
  }

  if (outcome !== "o" && outcome !== "x") {
    // Check if the game has been left unfinished.
    outcome = this.checkIfUnfinished(rows);
  }

  if (outcome !== "o" && outcome !== "x" && outcome !== "unfinished") {
    // Otherwise, the game is a draw.
    outcome = "draw";
  }

  return outcome;
};

// Checks the arrays for a winner.
TicTacToe.prototype.checkArrayWinners = function(arr) {
  let outcome = "";

  for (let i in arr) {
    // Check if every value in the array is an "o".
    outcome = this.checkEachTile(arr[i], "o", outcome);

    // Check if every value in the array is an "x".
    outcome = this.checkEachTile(arr[i], "x", outcome);
  }

  return outcome;
};

// Checks each tile of the array for a match.
TicTacToe.prototype.checkEachTile = function(arr, letter, outcome) {
  // Check if every value in the array is the same.
  let winner = arr.every((value, index, array) => {
    return value === letter;
  });

  if (winner) {
    outcome = letter;
  }

  return outcome;
};

// Checks if the game is unfinished.
TicTacToe.prototype.checkIfUnfinished = function(arr) {
  let outcome = "";

  for (let i in arr) {
    let checkForBlank = arr[i].includes(" ");

    if (checkForBlank) {
      outcome = "unfinished";
    }
  }

  return outcome;
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
TicTacToe.prototype.getColumns = function(rows) {
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

// Helper function to store the diagonals on the board.
TicTacToe.prototype.getDiagonals = function(rows) {
  // Will always only be two diagonals.
  let diagonals = [];
  let forwardDiagonal = [];
  let backwardDiagonal = [];

  // Start with the forward diagonal.
  let pointer = rows.length - 1;

  // Populate the forward diagonal.
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (j === pointer) {
        forwardDiagonal.push(rows[i][j]);
        pointer--;
        break;
      }
    }
  }

  // Reset for the backwards diagonal.
  pointer = 0;

  // Populate the backward diagonal.
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (j === pointer) {
        backwardDiagonal.push(rows[i][j]);
        pointer++;
        break;
      }
    }
  }

  diagonals.push(forwardDiagonal);
  diagonals.push(backwardDiagonal);

  return diagonals;
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
