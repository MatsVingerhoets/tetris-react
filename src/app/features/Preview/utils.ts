import { Shape, SHAPES, Tetromino, TETROMINOES } from "src/tetrominoes"

type Props = {
  shapeName: SHAPES | undefined,
  isOccupied: boolean
  position: {
    row: number,
    column: number
  }
  rows: {
    occupied: boolean
    shapeName: SHAPES | undefined
  }[][],
  shape: Shape
}

export const transferToBoard = ({ shapeName, isOccupied, position, rows, shape }: Props) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied
        const _y = y + position.row
        const _x = x + position.column
        rows[_y][_x] = { occupied, shapeName }
      }
    })
  })
  return rows
}

export const randomTetromino = (): Tetromino => {
  const keys = Object.keys(TETROMINOES)
  const index = Math.floor(Math.random() * keys.length)
  const key = keys[index]
  return TETROMINOES[key]
}