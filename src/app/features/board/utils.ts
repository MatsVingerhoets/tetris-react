import { Shape, ShapeNames } from "src/tetrominoes"
import { Player } from "src/app/features/game/states"
import defaultCell from "./components/defaultCell"
import { transferToBoard } from "../Preview/utils"
import { BoardType } from "./types"

type buildBoardProps = {
  rows: number
  columns: number
}

type nextBoardProps = {
  board: BoardType
  player: Player
  resetPlayer: () => void
  addLinesCleared: () => void
}

type FunctionProps = {
  board: BoardType,
  position: {
    row: number,
    column: number
  },
  shape: Shape
}

type RotateProps = {
  piece: Shape
  direction: number
}



export const buildBoard = ({ rows, columns }: buildBoardProps) => {
  const builtRows = <
    { occupied: boolean; shapeName: undefined | ShapeNames }[][]
    >Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => ({ ...defaultCell }))
    )

  return {
    rows: builtRows,
    size: { rows, columns }
  }
}

export const nextBoard = ({
  board,
  player,
  resetPlayer,
  addLinesCleared
}: nextBoardProps) => {
  const { tetromino, position } = player

  // checks if next cell already has piece there, so it does not replace that cell
  const calculateRows = board.rows.map(row =>
    row.map(cell => (cell.occupied ? cell : { ...defaultCell }))
  )
  const newRows = transferToBoard({
    shapeName: tetromino.shapeName,
    isOccupied: player.collided,
    position,
    rows: calculateRows,
    shape: tetromino.shape
  })

  //if we collide with bottom, reset the player
  if (player.collided || player.isFastDropping) {
    resetPlayer()
  }
  return { rows: newRows, size: { ...board.size } }
}

export const rotate = ({ piece, direction }: RotateProps) => {
  const newPiece = piece.map((_, index) => (
    piece.map((column) => column[index])
  ))
  if (direction > 0) return newPiece.map((row) => row.reverse())
  return newPiece.reverse()
}

export const isWithinBoard = ({ board, position, shape }: FunctionProps) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column
        const isValidPosition = board.rows[row] && board.rows[row][column]
        if (!isValidPosition) return false
      }
    }
  }
  return true
}

export const hasCollision = ({ board, position, shape }: FunctionProps) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column
        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true
        }
      }
    }
  }
  return false
}