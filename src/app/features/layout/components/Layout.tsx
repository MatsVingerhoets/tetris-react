import { NextBlocks } from "src/app/features/nextBlocks"
import { Board } from "src/app/features/board"
import { GameStats } from "src/app/features/gameStats"
import { HoldBlock } from "src/app/features/HoldBlock"
import { useBoard } from "src/app/features/board/hooks/useBoard"
import { useGameStats } from "src/app/features/gameStats/hooks/useGameStats"
import { useAtom } from "jotai"
import { playerAtom } from "../../game/states"
import { usePlayer } from "../../game/hooks/useGame"

type Props = {
  rows: number
  columns: number
}
const Layout = ({ rows, columns }: Props) => {
  const [gameStats, addLinesCleared] = useGameStats()
  const [player] = useAtom(playerAtom)
  const { resetPlayer } = usePlayer()
  const { board } = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  })
  console.log(player)
  return (
    <>
      <div className="w-32 flex flex-col justify-between">
        <HoldBlock />
        <GameStats gameStats={gameStats} />
      </div>
      <Board board={board} />
      <div className="w-32 flex flex-col justify-between">
        <NextBlocks tetrominoes={player.tetrominoes} />
      </div>
    </>
  )
}
export default Layout
