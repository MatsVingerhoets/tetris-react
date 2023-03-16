import { useAtom } from "jotai"
import { gameStateAtom } from "../states"
import { GameStateType } from "../types"

const GameOver = () => {
  const [, setGameState] = useAtom(gameStateAtom)
  const startGame = () => {
    setGameState(GameStateType.ONGOING)
  }
  return (
    <button
      className="w-64 self-center h-32 bg-gray-900 text-white rounded text-2xl"
      onClick={startGame}
    >
      Start Game
    </button>
  )
}
export default GameOver
