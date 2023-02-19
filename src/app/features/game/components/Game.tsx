import { useAtom } from "jotai"
import { GameOver } from "src/app/features/gameOver"
import { gameStateAtom } from "src/app/features/gameOver/states"
import { Layout } from "src/app/features/layout"
import { GameStateType } from "src/app/features/gameOver/types"

const Game = () => {
  const [gameState] = useAtom(gameStateAtom)
  const board = (() => {
    switch (gameState) {
      case GameStateType.ONGOING: return <Layout />
      case GameStateType.GAMEOVER: return <GameOver />
    }
  })()
  // when game is paused have like an overlay over the game
  return (
    <div className="flex justify-center content-center flex-wrap w-screen h-screen">
      {board}
    </div>
  )
}
export default Game 
