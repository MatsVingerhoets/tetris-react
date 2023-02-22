import { useAtom } from "jotai"
import { gameStateAtom } from "../../gameOver/states"
import { GameStateType } from "../../gameOver/types"

const GameButtons = ({ score }: { score: number }) => {
    const [, setGameState] = useAtom(gameStateAtom)
    const handleRestart = () => {
        setGameState(GameStateType.GAMEOVER)
    }
    const handlePause = () => {
        setGameState(GameStateType.PAUSED)
    }
    return (
        <div className="w-32 h-32 bg-gray-400">
            <div>Score:{score}</div>
            <div>Level: 1</div>
            <button className="border-solid border border-black block rounded p-1 mb-2 mt-2" onClick={(e) => {
            }}>Pause</button>
            <button onClick={handleRestart} className="border-solid border border-black block rounded p-1">Restart</button>
        </div>
    )
}

export default GameButtons