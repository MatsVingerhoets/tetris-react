import { Shape, ShapeNames, Tetromino, TETROMINOES } from "src/tetrominoes"

type TransferToBoardProps = {
  shapeName: ShapeNames | undefined
  isOccupied: boolean
  position: {
    row: number
    column: number
  }
  rows: {
    occupied: boolean
    shapeName: ShapeNames | undefined
    ghost: boolean
  }[][]
  shape: Shape
  isGhost: boolean
}

export const transferToBoard = ({
  shapeName,
  isOccupied,
  position,
  rows,
  shape,
  isGhost
}: TransferToBoardProps) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const _y = y + position.row
        const _x = x + position.column
        rows[_y][_x] = { ghost: isGhost, occupied: isOccupied, shapeName }
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
