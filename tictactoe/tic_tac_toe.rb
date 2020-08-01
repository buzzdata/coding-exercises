require 'matrix'
class TicTacToe
  def initialize(board)
    @board = Matrix[*board]
    @board_dimension = board.first.size
  end

  def winner
    return 'o' if victory_for?('o')

    return 'x' if victory_for?('x')

    unfinished_game? ? 'unfinished' : 'draw'
  end

  private

  def victory_for?(string)
    lines_for(string) || columns_for(string) || diagonals_for(string)
  end

  def lines_for(string)
    @board_dimension.times { |i| return true if @board.row(i).uniq == [string] }

    false
  end

  def columns_for(string)
    @board_dimension.times { |i| return true if @board.column(i).uniq == [string] }

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
