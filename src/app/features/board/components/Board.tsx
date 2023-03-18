import { useAtom } from "jotai"
import { boardAtom } from "../states"
import BoardCell from "./BoardCell"
import { StyledContainer } from "./styles/Board.style"

const Board = () => {
  const [board] = useAtom(boardAtom)
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
