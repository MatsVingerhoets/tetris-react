import { BoardType } from "../types"
import BoardCell from "./BoardCell"
import { StyledContainer } from "./styles/Board.style"

type Props = {
  board: BoardType
}

const Board = ({ board }: Props) => {
  return (
    <StyledContainer
      rows={board.size.rows}
      cols={board.size.columns}
      className={`grid gap-px border-solid border-x-2 border-b-2 border-white`}
    >
      {board.rows.map(row =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns} cell={cell} />
        ))
      )}
    </StyledContainer>
  )
}

export default Board
