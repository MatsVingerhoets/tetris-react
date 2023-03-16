export type Shape = number[][]
export type Tetromino = {
  shape: Shape
  shapeName: ShapeNames
}

export type Tetrominoes = {
  [key: string]: Tetromino
}
export enum ShapeNames {
  I = "i",
  J = "j",
  L = "l",
  O = "o",
  S = "s",
  Z = "z",
  T = "t"
}

export enum GameStatus {
  STARTED = "started",
  PAUSED = "paused",
  FINISHED = "finished"
}
export const TETROMINOES: Tetrominoes = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0]
    ],
    shapeName: ShapeNames.I
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    shapeName: ShapeNames.J
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    shapeName: ShapeNames.L
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    shapeName: ShapeNames.O
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    shapeName: ShapeNames.S
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
    shapeName: ShapeNames.T
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    shapeName: ShapeNames.Z
  }
}
