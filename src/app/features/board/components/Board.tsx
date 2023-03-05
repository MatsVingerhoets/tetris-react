import BoardCell from "./BoardCell"

type Props = {
  board: {
    rows: {
      occupied: boolean,
      className: string
    }[][],
    size: {
      rows: number,
      columns: number
    }
  }
}
const Board = ({ board }: Props) => {
  console.log({ board })
  return (
    <div className="w-fit">
      <div className={`grid grid-cols-${board.size.columns} bg-gray-900 grid-rows-${board.size.rows} gap-px border-solid border-x-2 border-b-2 border-white`}>
        {board.rows.map((row, y) => (
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns} cell={cell} />
          ))
        ))}
      </div>
    </div>
  )
}

export default Board
