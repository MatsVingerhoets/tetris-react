import { useAtom } from "jotai"
import { GameOver } from "src/app/features/gameOver"
import { gameStateAtom } from "src/app/features/gameOver/states"
import { Layout } from "src/app/features/layout"
import { GameStateType } from "src/app/features/gameOver/types"
import { playerAtom } from "../states"

const Game = () => {
  const [gameState] = useAtom(gameStateAtom)
  const [player, setPlayer] = useAtom(playerAtom)

  const board = (() => {
    switch (gameState) {
      case GameStateType.ONGOING: return <Layout rows={18} columns={10} />
      case GameStateType.GAMEOVER: return <GameOver />
    }
  })()
  // when game is paused have like an overlay over the game
  return (
    <div className="flex bg-blue-800 justify-center content-center flex-wrap w-screen h-screen">
      {board}
    </div>
  )
}
export default Game 
