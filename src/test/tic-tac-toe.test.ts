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

  describe("when the first player has 3 Xs in a row at the top", () => {
    it("should return O as the winner", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      ticTacToe.play(3);
      ticTacToe.play(1);
      ticTacToe.play(4);
      ticTacToe.play(2);
      expect(ticTacToe.winner).toEqual("X");
    });
  });

  describe("when the second player has 3 Os in a row at the top", () => {
    it("should return O as the winner", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(3);
      ticTacToe.play(0);
      ticTacToe.play(4);
      ticTacToe.play(1);
      ticTacToe.play(8);
      ticTacToe.play(2);
      expect(ticTacToe.winner).toEqual("O");
    });
  });

  describe("when the first player has 3 Xs in a row in the middle", () => {
    it("should return X as the winner", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(3);
      ticTacToe.play(0);
      ticTacToe.play(4);
      ticTacToe.play(1);
      ticTacToe.play(5);
      expect(ticTacToe.winner).toEqual("X");
    });
  });

  describe("when the first player has 3 Xs in a row on the left", () => {
    it("should return X as the winner", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(0);
      ticTacToe.play(2);
      ticTacToe.play(3);
      ticTacToe.play(5);
      ticTacToe.play(7);
      expect(ticTacToe.winner).toEqual("X");
    });
  });

  describe("when the all positions are filled and there is no winner", () => {
    it("should be a draw", () => {
      const ticTacToe = new TicTacToe();
      ticTacToe.play(1);
      ticTacToe.play(0);
      ticTacToe.play(2);
      ticTacToe.play(4);
      ticTacToe.play(8);
      ticTacToe.play(5);
      ticTacToe.play(3);
      ticTacToe.play(6);
      ticTacToe.play(7);
      expect(ticTacToe.winner).toEqual("");
      expect(ticTacToe.draw).toEqual(true);
    });
  });
});
