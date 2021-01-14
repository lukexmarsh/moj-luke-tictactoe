import { TicTacToe } from "../main/tic-tac-toe";

describe("tic-tac-toe", () => {
  describe("when the game starts", () => {
    it("should set the first player as X", () => {
      const ticTacToe = new TicTacToe();
      expect(ticTacToe.currentPlayer).toEqual("X");
    });
  });
  describe("when the first player plays", () => {
    it("should set the second player as O", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play();
      expect(ticTacToe.currentPlayer).toEqual("O");
    });
  });
});
