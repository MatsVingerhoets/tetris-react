import { useAtom } from "jotai"
import { GameOver } from "src/app/features/gameOver"
import { gameStateAtom } from "src/app/features/gameOver/states"
import { Layout } from "src/app/features/layout"
import { GameStateType } from "src/app/features/gameOver/types"

const Game = () => {
  const [gameState] = useAtom(gameStateAtom)
  const game = (() => {
    switch (gameState) {
      case GameStateType.ONGOING:
        return <Layout rows={18} columns={10} />
      case GameStateType.GAMEOVER:
        return <GameOver />
    }
  })()
  // when game is paused have like an overlay over the game
  return (
    <div className="flex justify-center content-center flex-col bg-blue-800 glw-screen h-screen">
      {game}
    </div>
  )
}
export default Game
