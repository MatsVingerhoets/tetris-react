import { ShapeNames } from "src/tetrominoes"
import { StyledCell } from "./styles/Board.style"

type Props = {
  shapeName: ShapeNames | undefined
  ghost: boolean
}

const BoardCell = ({ cell }: { cell: Props }) => {
  return (
    <StyledCell
      ghost={cell.ghost}
      tetromino={cell.shapeName}
      className={`w-7 h-7`}
    ></StyledCell>
  )
}

export default BoardCell
