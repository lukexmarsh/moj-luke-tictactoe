import { TicTacToe } from "../main/tic-tac-toe";

describe("tic-tac-toe", () => {
  describe("play", () => {
    it("returns the current player of tictactoe", () => {
      const ticTacToe = new TicTacToe();
      expect(ticTacToe.currentPlayer).toEqual("X");
    });
  });
});
