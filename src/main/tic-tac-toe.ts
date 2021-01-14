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
        this.board[0] === this.currentPlayer &&
        this.board[1] === this.currentPlayer &&
        this.board[2] === this.currentPlayer
      ) {
        this.winner = this.currentPlayer;
      }

      this.currentPlayer =
        this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
    } else {
      return new Error("Position has already been filled");
    }
  }
}
