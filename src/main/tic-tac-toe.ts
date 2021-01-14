export class TicTacToe {
  public currentPlayer: string;
  private playerOne = "X";
  private playerTwo = "O";
  public board: string[];
  public winner: string;
  public draw: boolean;

  constructor() {
    this.currentPlayer = this.playerOne;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.winner = "";
    this.draw = false;
  }

  private winConditions: WinCondition[] = [
    {FirstPosition: 0, SecondPosition: 1, ThirdPosition: 2},
    {FirstPosition: 3, SecondPosition: 4, ThirdPosition: 5},
    {FirstPosition: 6, SecondPosition: 7, ThirdPosition: 8},
    {FirstPosition: 0, SecondPosition: 3, ThirdPosition: 6},
    {FirstPosition: 1, SecondPosition: 4, ThirdPosition: 7},
    {FirstPosition: 2, SecondPosition: 5, ThirdPosition: 8},
    {FirstPosition: 0, SecondPosition: 4, ThirdPosition: 8},
    {FirstPosition: 2, SecondPosition: 4, ThirdPosition: 6},
  ]

  public play(positionOnBoard: number) {
    if (this.board[positionOnBoard] === "") {
      this.board[positionOnBoard] = this.currentPlayer;
      this.checkWinCondition();

      this.currentPlayer =
        this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
    } else {
      return new Error("Position has already been filled");
    }
  }

  private checkWinCondition() {
    this.winConditions.forEach(winCondition => {
      if (
          this.checkCurrentWinCondition(this.getCell(winCondition.FirstPosition), this.getCell(winCondition.SecondPosition), this.getCell(winCondition.ThirdPosition))
      ) {
        this.winner = this.currentPlayer;
      }
    })

    if(this.board.indexOf("") === -1) {
      this.draw = true;
    }
  }

  private checkCurrentWinCondition(cell: string, cell1: string, cell2: string) {
    return cell === this.currentPlayer &&
        cell1 === this.currentPlayer &&
        cell2 === this.currentPlayer;
  }

  private getCell(index: number) {
    return this.board[index];
  }
}

interface WinCondition {
  FirstPosition: number;
  SecondPosition: number;
  ThirdPosition: number;
}
