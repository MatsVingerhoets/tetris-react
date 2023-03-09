import BoardCell from "./BoardCell"
import { StyledDiv } from "./styles/Board.style"

type Props = {
  board: {
    rows: {
      occupied: boolean
      className: string
    }[][]
    size: {
      rows: number
      columns: number
    }
  }
}
const Board = ({ board }: Props) => {
  return (
    <div className="w-fit">
      <StyledDiv
        rows={board.size.rows}
        cols={board.size.columns}
        className={`grid gap-px border-solid border-x-2 border-b-2 border-white`}
      >
        {board.rows.map(row =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns} cell={cell} />
          ))
        )}
      </StyledDiv>
    </div>
  )
}

export default Board
