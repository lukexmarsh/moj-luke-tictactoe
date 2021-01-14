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
      ticTacToe.play(1);
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

  describe("when the second piece is played on 0", () => {
    it("should not overwrite the value on that board position", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      expect(ticTacToe.play(0)).toEqual(
        new Error("Position has already been filled")
      );
      expect(ticTacToe.board[0]).toEqual("X");
    });
  });

  describe("when the second piece is played on 0", () => {
    it("should not overwrite the value on that board position", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      ticTacToe.play(3);
      ticTacToe.play(1);
      ticTacToe.play(4);
      ticTacToe.play(2);
      expect(ticTacToe.winner).toEqual("X");
    });
  });
});
