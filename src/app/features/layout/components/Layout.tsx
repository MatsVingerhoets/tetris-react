import { NextBlock } from "src/app/features/nextBlock"
import { Board } from "src/app/features/board"
import { GameStats } from "src/app/features/gameStats"
import { HoldBlock } from "src/app/features/HoldBlock"
import { useBoard } from "src/app/features/board/hooks/useBoard"

type Props = {
  rows: number
  columns: number
}
const Layout = ({ rows, columns }: Props) => {
  const { board, setBoard } = useBoard({ rows, columns })
  console.log(board)
  return (
    <>
      <div className="w-32 flex flex-col justify-between">
        <HoldBlock />
        <GameStats />
      </div>
      <Board board={board} />
      <div className="flex flex-col justify-between ml-2">
        <NextBlock />
      </div>
    </>
  )
}
export default Layout
