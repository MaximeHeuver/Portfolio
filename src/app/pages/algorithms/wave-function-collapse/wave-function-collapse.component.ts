import { Component } from '@angular/core';
import {Cell, PossibleState} from "./wave-function-collpase.data";

@Component({
  selector: 'app-wave-function-collapse',
  templateUrl: './wave-function-collapse.component.html',
  styleUrls: ['./wave-function-collapse.component.scss']
})
export class WaveFunctionCollapseComponent {
  public gridSize: number = 10;
  public grid: Cell[][] = [];
  public allCells: Cell[] = [];
  private border: Cell = new Cell(-1, -1);

  constructor() {
    this.initWaveFunctionCollapse()
  }

  public collapseAll() {
    while (!this.allCells.every(cell => cell.isCollapsed)) {
      this.collapseLowesEntropyCell()
    }
  }

  resetGrid() {
    this.initWaveFunctionCollapse()
  }

  private collapseLowesEntropyCell() {
    let minimumPossibleStates = Math.min(...this.allCells.filter(cell => !cell.isCollapsed).map(cell => cell.possibleStates.length))

    let cellToCollapse: Cell = this.allCells
      .filter(cell => cell.possibleStates.length == minimumPossibleStates)[0]

    let possibleStates = cellToCollapse.possibleStates;
    let collapsedState = possibleStates[Math.floor(Math.random() * possibleStates.length)];

    cellToCollapse.collapse(collapsedState);
  }

  private initWaveFunctionCollapse() {
    //instantiate and fill grid
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];

      for (let j = 0; j < this.gridSize; j++) {
        let cell = new Cell(i, j)
        this.grid[i][j] = cell;
        this.allCells.push(cell);
      }
    }

    //connect cells together
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {

        let cellUp = (j == 0) ? this.border : this.grid[i][j-1];
        let cellRight = (i == this.gridSize - 1) ? this.border : this.grid[i+1][j];
        let cellDown = (j == this.gridSize - 1) ? this.border : this.grid[i][j+1];
        let cellLeft = (i == 0) ? this.border : this.grid[i-1][j];

        this.grid[i][j].adjacentCells = [
          cellUp,
          cellRight,
          cellDown,
          cellLeft
        ]
      }
    }
  }

  collapseCell(collapseState: PossibleState, col: number, row: number) {
    this.grid[col][row].collapse(collapseState)
  }
}
