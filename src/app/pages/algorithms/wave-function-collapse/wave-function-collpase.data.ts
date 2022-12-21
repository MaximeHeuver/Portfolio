export class Cell {
  public isCollapsed: boolean;
  public collapsedState: PossibleState = EMPTY_TILE_0000; //TODO find better solution
  public possibleStates: PossibleState[];
  public adjacentCells: Cell[] = [];
  public col: number;
  public row: number;
  private MAX_POSSIBLE_STATES = 9;

  constructor(col: number, row: number) {
    this.isCollapsed = false;
    this.possibleStates = ALL_TILES;
    this.col = col;
    this.row = row;
  }

  collapse(possibleState: PossibleState) {
    this.collapsedState = possibleState;
    this.possibleStates = [possibleState];
    this.isCollapsed = true;

    this.adjacentCells.forEach((cell, index) => cell.eliminatePossibleStatesRecursive(this.possibleStates, index, []))
  }

  private eliminatePossibleStatesRecursive(leftoverStates: PossibleState[], originIndex: number, visitedCells: Cell[]) {
    if (this.isCollapsed || visitedCells.includes(this)) return;

    visitedCells.push(this);

    this.eliminatePossibleStates(leftoverStates, originIndex);

    if (this.possibleStates.length == this.MAX_POSSIBLE_STATES) return;

    this.adjacentCells.forEach((cell, index) => cell.eliminatePossibleStatesRecursive(this.possibleStates, index, visitedCells))
  }

  private eliminatePossibleStates(leftoverStates: PossibleState[], originIndex: number) {
    let invertedOriginIndex = (originIndex + 2) % 4;

    let allowedPossibilityIDs: number[] = leftoverStates.map(state => state.compatabilityIDs[originIndex])

    this.possibleStates = this.possibleStates
      .filter(state => allowedPossibilityIDs
        .includes(state.compatabilityIDs[invertedOriginIndex]));

    if (this.possibleStates.length == 1) {
      this.collapse(this.possibleStates[0]);
    }
  }
}

export class PossibleState {
  public imageSrc: string;
  public chanceModifier: number;
  public compatabilityIDs: number[];

  constructor(imageSrc: string, chanceModifier: number, compatabilityIDs: number[]) {
    this.imageSrc = imageSrc;
    this.chanceModifier = chanceModifier;
    this.compatabilityIDs = compatabilityIDs;
  }
}

const BASE_PATH = "/assets/tiles/";

const STRAIGHT_TILE_1010 = new PossibleState(BASE_PATH + "tile-straight-1010.png", 1, [1, 0, 1, 0]);
const STRAIGHT_TILE_0101 = new PossibleState(BASE_PATH + "tile-straight-0101.png", 1, [0, 1, 0, 1]);
const CORNER_TILE_0110 = new PossibleState(BASE_PATH + "tile-corner-0110.png", 1, [0, 1, 1, 0]);
const CORNER_TILE_1001 = new PossibleState(BASE_PATH + "tile-corner-1001.png", 1, [1, 0, 0, 1]);
const CORNER_TILE_1100 = new PossibleState(BASE_PATH + "tile-corner-1100.png", 1, [1, 1, 0, 0]);
const T_SHAPE_TILE_1110 = new PossibleState(BASE_PATH + "tile-t-shape-1110.png", 1, [1, 1, 1, 0]);
const T_SHAPE_TILE_0111 = new PossibleState(BASE_PATH + "tile-t-shape-0111.png", 1, [0, 1, 1, 1]);
const CROSS_TILE_1111 = new PossibleState(BASE_PATH + "tile-cross-1111.png", 1, [1, 1, 1, 1]);
const EMPTY_TILE_0000 = new PossibleState(BASE_PATH + "tile-empty-0000.png", 1, [0, 0, 0, 0]);

const ALL_TILES = [STRAIGHT_TILE_1010, STRAIGHT_TILE_0101, CORNER_TILE_0110, CORNER_TILE_1001, CORNER_TILE_1100, T_SHAPE_TILE_1110, T_SHAPE_TILE_0111, CROSS_TILE_1111, EMPTY_TILE_0000];
