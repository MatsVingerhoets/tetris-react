import { SHAPES } from "src/tetrominoes"
import { StyledCell } from "./styles/Board.style"

type Props = {
  shapeName: SHAPES | undefined
}

const BoardCell = ({ cell }: { cell: Props }) => {
  return <StyledCell tetromino={cell.shapeName} className={`w-7 h-7`}></StyledCell>
}

export default BoardCell
