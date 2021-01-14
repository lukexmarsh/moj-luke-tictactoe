export class TicTacToe {
  public currentPlayer: string;

  constructor() {
    this.currentPlayer = "X";
  }

  public play() {
    this.currentPlayer = "O";
  }
}
