import { useAtom } from "jotai"
import { gameOverAtom } from "../states"

const GameOver = () => {
    const [, setGameOver] = useAtom(gameOverAtom)
    const startGame = () => {
        setGameOver(false)
    }
    return (
        <button className="w-64 h-32 bg-gray-900 text-white rounded text-2xl" onClick={startGame}>Start Game</button>
    )
}
export default GameOver