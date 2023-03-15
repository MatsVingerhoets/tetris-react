import { useAtom } from "jotai"
import { playerAtom } from "src/app/features/game/states"

const GameController = ({ board, gameStats, setGameOver }) => {
  const [player, setPlayer] = useAtom(playerAtom)
  return <input className="w-32 h-12" type="text" />
}
export default GameController
