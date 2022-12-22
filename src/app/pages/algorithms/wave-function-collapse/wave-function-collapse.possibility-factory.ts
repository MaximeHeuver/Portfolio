import {PossibleState} from "./wave-function-collpase.data";

export class PossibleStateFactory {

  static getAllPossibilities(typeBasePathExtension: string) {
    let basePath = "/assets/tiles/" + typeBasePathExtension + "/";

    return [
      new PossibleState(basePath + "tile-straight-1010.png", 1, [1, 0, 1, 0]),
      new PossibleState(basePath + "tile-straight-0101.png", 1, [0, 1, 0, 1]),

      new PossibleState(basePath + "tile-corner-0110.png", 1, [0, 1, 1, 0]),
      new PossibleState(basePath + "tile-corner-1001.png", 1, [1, 0, 0, 1]),
      new PossibleState(basePath + "tile-corner-1100.png", 1, [1, 1, 0, 0]),
      new PossibleState(basePath + "tile-corner-0011.png", 1, [0, 0, 1, 1]),

      new PossibleState(basePath + "tile-start-0010.png", 1, [0, 0, 1, 0]),
      //new PossibleState(basePath + "tile-end-1000.png", 1, [1, 0, 0, 0]),

      new PossibleState(basePath + "tile-cross-1111.png", 1, [1, 1, 1, 1]),
      new PossibleState(basePath + "tile-empty-0000.png", 1, [0, 0, 0, 0])
    ];
  }
}

class Circle {
  static pi: number = 3.14;

  static calculateArea(radius:number) {
    return this.pi * radius * radius;
  }
}


// const STRAIGHT_TILE_1010 = new PossibleState(BASE_PATH + "tile-straight-1010.png", 1, [1, 0, 1, 0]);
// const STRAIGHT_TILE_0101 = new PossibleState(BASE_PATH + "tile-straight-0101.png", 1, [0, 1, 0, 1]);
//
// const CORNER_TILE_0110 = new PossibleState(BASE_PATH + "tile-corner-0110.png", 1, [0, 1, 1, 0]);
// const CORNER_TILE_1001 = new PossibleState(BASE_PATH + "tile-corner-1001.png", 1, [1, 0, 0, 1]);
// const CORNER_TILE_1100 = new PossibleState(BASE_PATH + "tile-corner-1100.png", 1, [1, 1, 0, 0]);
// const CORNER_TILE_0011 = new PossibleState(BASE_PATH + "tile-corner-0011.png", 1, [0, 0, 1, 1]);
//
// const START_TILE_0010 = new PossibleState(BASE_PATH + "tile-start-0010.png", 1, [0, 0, 1, 0]);
// const END_TILE_1000 = new PossibleState(BASE_PATH + "tile-end-1000.png", 1, [1, 0, 0, 0]);
//
// const CROSS_TILE_1111 = new PossibleState(BASE_PATH + "tile-cross-1111.png", 1, [1, 1, 1, 1]);
// const EMPTY_TILE_0000 = new PossibleState(BASE_PATH + "tile-empty-0000.png", 1, [0, 0, 0, 0]);
//
// const T_SHAPE_TILE_1110 = new PossibleState(BASE_PATH + "tile-t-shape-1110.png", 1, [1, 1, 1, 0]);
// const T_SHAPE_TILE_0111 = new PossibleState(BASE_PATH + "tile-t-shape-0111.png", 1, [0, 1, 1, 1]);
// const T_SHAPE_TILE_1011 = new PossibleState(BASE_PATH + "tile-t-shape-1011.png", 1, [1, 0, 1, 1]);
// const T_SHAPE_TILE_1101 = new PossibleState(BASE_PATH + "tile-t-shape-1101.png", 1, [1, 1, 0, 1]);
//
// const ALL_TILES = [
//   STRAIGHT_TILE_1010,
//   STRAIGHT_TILE_0101,
//   CORNER_TILE_0110,
//   CORNER_TILE_1001,
//   CORNER_TILE_1100,
//   CORNER_TILE_0011,
//   START_TILE_0010,
//   END_TILE_1000,
//   T_SHAPE_TILE_1110,
//   T_SHAPE_TILE_0111,
//   T_SHAPE_TILE_1011,
//   T_SHAPE_TILE_1101,
//   CROSS_TILE_1111,
//   EMPTY_TILE_0000
// ];
