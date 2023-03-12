import { buildBoard } from "src/app/features/board/utils"
import { Shape, SHAPES } from "src/tetrominoes"
import BoardCell from "../../board/components/BoardCell"
import { transferToBoard } from "../utils"

type Props = {
  tetromino: { shape: Shape, shapeName: SHAPES | undefined }
  index: number
}
const Preview = ({ tetromino, index }: Props) => {
  const { shape, shapeName } = tetromino
  const board = buildBoard({ rows: 4, columns: 4 })
  board.rows = transferToBoard({
    shapeName,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  })
  return (
    <div className="grid gap-1 grid-rows-4 grid-cols-4 bg-red-900">
      {board.rows.map((row, y) => (
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )
      )}
    </div>
  )
}
export default Preview