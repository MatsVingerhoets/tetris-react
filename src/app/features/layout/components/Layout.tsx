import { NextBlocks } from "src/app/features/nextBlocks"
import { Board } from "src/app/features/board"
import { GameStats } from "src/app/features/gameStats"
import { HoldBlock } from "src/app/features/HoldBlock"
import { useBoard } from "src/app/features/board/hooks/useBoard"
import { useGameStats } from "src/app/features/gameStats/hooks/useGameStats"
import { useAtom } from "jotai"
import { playerAtom } from "src/app/features/game/states"
import { usePlayer } from "src/app/features/game/hooks/useGame"
import { GameController } from "src/app/features/gameController"

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
  return (
    <>
      <div className="flex justify-center content-center flex-wrap">
        <div className="w-32 flex flex-col justify-between">
          <HoldBlock />
          <GameStats gameStats={gameStats} />
        </div>
        <Board board={board} />
        <div className="w-32 flex flex-col justify-between">
          <NextBlocks tetrominoes={player.tetrominoes} />
        </div>
      </div>
      <div className="flex mt-2 justify-center">
        <GameController board={board} gameStats={gameStats} />
      </div>
    </>
  )
}
export default Layout
