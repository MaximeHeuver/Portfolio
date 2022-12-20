import { Component, } from '@angular/core';
import { Cell, PossibleState } from "./wave-function-collapse-service/wave-function-collpase.data"

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})

export class AlgorithmsComponent {
  //Wave function collapse variables
  public gridSize: number = 10;
  public grid: Cell[][] = [];

  constructor() {
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];

      for (let j = 0; j < this.gridSize; j++) {
        this.grid[i][j] = new Cell()
      }
    }
  }

  choosePossibleValue(possibleState: PossibleState, column: number, row: number) {
    console.log(possibleState)
    console.log(row)
    console.log(column)

    this.grid[column][row].collapse(possibleState)
  }
}
