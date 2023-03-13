const className = "tetromino"

export type Shape = number[][]
export type Tetromino = {
  shape: Shape
  shapeName: SHAPES
}

export type Tetrominoes = {
  [key: string]: Tetromino
}
export enum SHAPES {
  i = "i",
  j = "j",
  l = "l",
  o = "o",
  s = "s",
  z = "z",
  t = "t"
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
    shapeName: SHAPES.i
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    shapeName: SHAPES.j
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    shapeName: SHAPES.l
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    shapeName: SHAPES.o
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    shapeName: SHAPES.s
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
    shapeName: SHAPES.t
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    shapeName: SHAPES.z
  }
}
