import { buildBoard } from "src/app/features/board/utils"
import { Shape, ShapeNames } from "src/tetrominoes"
import BoardCell from "../../board/components/BoardCell"
import { StyledGridContainer } from "./styles/styles"
import { transferToBoard } from "../utils"

type Props = {
  tetromino: { shape: Shape; shapeName: ShapeNames | undefined }
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
    <StyledGridContainer className="grid gap-px ml-7 w-auto grid-rows-4 grid-cols-4">
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </StyledGridContainer>
  )
}
export default Preview
