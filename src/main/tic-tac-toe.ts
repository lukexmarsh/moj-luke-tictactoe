export class TicTacToe {
  public currentPlayer: string;
  private playerOne = 'X';
  private playerTwo = 'O';
  public board: string[];

  constructor() {
    this.currentPlayer = this.playerOne;
    this.board = ["","","","","","","","",""];
  }

  public play(positionOnBoard: number) {
    this.board[positionOnBoard] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }
}
