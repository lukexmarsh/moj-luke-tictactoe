import { TicTacToe } from "../main/tic-tac-toe";

describe("tic-tac-toe", () => {
  describe("when the game starts", () => {
    it("should set the first player as X", () => {
      const ticTacToe = new TicTacToe();
      expect(ticTacToe.currentPlayer).toEqual("X");
    });
  });

  describe("when the first player plays", () => {
    it("should set the next player as O", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      expect(ticTacToe.currentPlayer).toEqual("O");
    });
  });

  describe("when the second player plays", () => {
    it("should set the next player as X", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      ticTacToe.play(0);
      expect(ticTacToe.currentPlayer).toEqual("X");
    });
  });

  describe("when the first piece is played on 0", () => {
    it("should return the correct board value at that position", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      expect(ticTacToe.board[0]).toEqual("X");
    });
  });
});
