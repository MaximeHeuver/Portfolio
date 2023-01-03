import { Component } from '@angular/core';
import {Cell, PossibleState} from "./wave-function-collpase.data";
import {PossibleStateFactory} from "./wave-function-collapse.possibility-factory";

@Component({
  selector: 'app-wave-function-collapse',
  templateUrl: './wave-function-collapse.component.html',
  styleUrls: ['./wave-function-collapse.component.scss']
})
export class WaveFunctionCollapseComponent {
  public gridSize: number = 15;
  public grid: Cell[][] = [];
  public allCells: Cell[] = [];
  public tileTypes: string[] = ["pipes", "dogs"];
  private currentPossibleStateType: string = "pipes";
  private border: Cell = new Cell(-1, -1, PossibleStateFactory.getAllPossibilities(this.currentPossibleStateType));

  constructor() {
    this.initWaveFunctionCollapse(this.currentPossibleStateType)
  }

  public collapseAll() {
    while (!this.allCells.every(cell => cell.isCollapsed)) {
      this.collapseLowesEntropyCell()
    }
  }

  public resetGrid() {
    this.initWaveFunctionCollapse(this.currentPossibleStateType)
  }

  public collapseCell(collapseState: PossibleState, col: number, row: number) {
    this.grid[col][row].collapse(collapseState)
  }

  public changeTileType(type: string) {
    this.currentPossibleStateType = type;
    this.resetGrid();
  }

  private collapseLowesEntropyCell() {
    let cellToCollapse: Cell = this.getLowestEntropyCell();

    let collapsedState: PossibleState =
      this.getWeightedRandomPossibleState(cellToCollapse.possibleStates);

    cellToCollapse.collapse(collapsedState);
  }

  private getLowestEntropyCell() {
    let minimumPossibleStates = Math.min(...this.allCells
      .filter(cell => !cell.isCollapsed)
      .map(cell => cell.possibleStates.length))

    return this.allCells.filter(cell => cell.possibleStates.length == minimumPossibleStates)[0]
  }

  private getWeightedRandomPossibleState(possibleStates: PossibleState[]) {
    let a = possibleStates[Math.floor(Math.random() * possibleStates.length)];

    //TODO add weight

    return a;
  }

  private initWaveFunctionCollapse(possibleStateType: string) {
    let allPossibleStates = PossibleStateFactory.getAllPossibilities(possibleStateType);

    //instantiate and fill grid
    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];

      for (let j = 0; j < this.gridSize; j++) {
        let cell = new Cell(i, j, allPossibleStates)
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
}
