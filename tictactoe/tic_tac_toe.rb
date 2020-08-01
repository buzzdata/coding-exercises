require 'matrix'
class TicTacToe
  def initialize(board)
    @board = Matrix[*board]
    @board_dimension = board.first.size
  end

  def winner
    return 'o' if lines_for('o')
    return 'x' if lines_for('x')

    return 'o' if columns_for('o')
    return 'x' if columns_for('x')

    return 'o' if diagonals_for('o')
    return 'x' if diagonals_for('x')

    return 'unfinished' if unfinished_game?

    'draw'
  end

  private

  def lines_for(string)
    @board_dimension.times do |i|
      return true if @board.row(i).uniq == [string]
    end

    false
  end

  def columns_for(string)
    @board_dimension.times do |i|
      return true if @board.column(i).uniq == [string]
    end

    false
  end

  def diagonals_for(string)
    return true if @board.each(:diagonal).to_a.uniq == [string]

    return true if matrix_reverse.each(:diagonal).to_a.uniq == [string]

    false
  end

  def matrix_reverse
    revert_matrix = @board.to_a.map(&:reverse)
    Matrix[*revert_matrix]
  end

  def unfinished_game?
    @board.to_a.flatten.include?(' ')
  end
end
