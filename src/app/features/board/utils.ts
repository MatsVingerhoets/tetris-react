import { Shape, ShapeNames } from "src/tetrominoes"
import { Player } from "src/app/features/game/states"
import defaultCell from "./components/defaultCell"
import { transferToBoard } from "../Preview/utils"
import { BoardType } from "./types"
import { movePlayer } from "../gameController/utils"

type buildBoardProps = {
  rows: number
  columns: number
}

type nextBoardProps = {
  board: BoardType
  player: Player
  newPlayer: () => void
  addLinesCleared: (lines: number) => void
}

type FunctionProps = {
  board: BoardType
  position: {
    row: number
    column: number
  }
  shape: Shape
}

type RotateProps = {
  piece: Shape
  direction: number
}

export const buildBoard = ({ rows, columns }: buildBoardProps) => {
  const builtRows = <BoardType["rows"]>(
    Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => ({ ...defaultCell }))
    )
  )

  return {
    rows: builtRows,
    size: { rows, columns }
  }
}
const findDropPosition = ({ board, position, shape }: FunctionProps) => {
  const max = board.size.rows - position.row + 1
  let row = 0
  for (let i = 0; i < max; i++) {
    const delta = { row: i, column: 0 }
    const { collided } = movePlayer({ delta, position, shape, board })
    if (collided) {
      break
    }
    row = position.row + i
  }
  return { ...position, row }
}

export const nextBoard = ({
  board,
  player,
  newPlayer,
  addLinesCleared
}: nextBoardProps) => {
  const { currentTetromino, position } = player

  // checks if next cell already has piece there, so it does not replace that cell
  let rows = board.rows.map(row =>
    row.map(cell => (cell.occupied ? cell : { ...defaultCell }))
  )
  //places the ghost
  const dropPosition = findDropPosition({
    board,
    position,
    shape: currentTetromino.shape
  })

  // places the ghost
  rows = transferToBoard({
    shapeName: currentTetromino.shapeName,
    isOccupied: player.isFastDropping,
    position: dropPosition,
    rows,
    isGhost: player.isFastDropping ? false : true,
    shape: currentTetromino.shape
  })

  // Places the piece
  // If collided, mark the board cells as collided
  if (!player.isFastDropping) {
    rows = transferToBoard({
      shapeName: currentTetromino.shapeName,
      isOccupied: player.collided,
      position,
      isGhost: false,
      rows,
      shape: currentTetromino.shape
    })
  }

  // Check for cleared lines
  const blankRow = rows[0].map(() => ({ ...defaultCell }))
  let linesCleared = 0
  rows = rows.reduce((acc: {
    occupied: boolean;
    shapeName: ShapeNames | undefined;
    ghost: boolean;
  }[][], row) => {
    if (row.every(column => column.occupied)) {
      linesCleared++
      acc.unshift([...blankRow])
    } else {
      acc.push(row)
    }

    return acc
  }, [])
  if (linesCleared > 0) {
    console.log({ linesCleared })
    addLinesCleared(linesCleared)
  }
  //if we collide with bottom, reset the player and move the preview
  if (player.collided || player.isFastDropping) {
    newPlayer()
  }
  return { rows, size: { ...board.size } }
}

export const rotate = ({ piece, direction }: RotateProps) => {
  const newPiece = piece.map((_, index) => piece.map(column => column[index]))
  if (direction > 0) return newPiece.map(row => row.reverse())
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
