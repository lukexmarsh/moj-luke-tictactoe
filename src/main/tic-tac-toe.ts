export class TicTacToe {
  public currentPlayer: string;
  private playerOne = "X";
  private playerTwo = "O";
  public board: string[];
  public winner: string;

  constructor() {
    this.currentPlayer = this.playerOne;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.winner = "";
  }

  public play(positionOnBoard: number) {
    if (this.board[positionOnBoard] === "") {
      this.board[positionOnBoard] = this.currentPlayer;

      if (
        this.board[0] === "X" &&
        this.board[1] === "X" &&
        this.board[2] === "X"
      ) {
        this.winner = "X";
      }

      this.currentPlayer =
        this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
    } else {
      return new Error("Position has already been filled");
    }
  }
}
