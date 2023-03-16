import { ShapeNames } from "src/tetrominoes"
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

  return { rows: newRows, size: { ...board.size } }
}
