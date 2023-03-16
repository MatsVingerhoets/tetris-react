import { useAtom } from "jotai"
import { KeyboardEvent } from "react"
import { playerAtom } from "src/app/features/game/states"
import { BoardType } from "../../board/types"
import { gameStateAtom } from "../../gameOver/states"
import { GameStateType } from "../../gameOver/types"
import { GameStatsType } from "../../gameStats/types"
import { Action } from "../types"
import { actionForKey, Controls, playerController } from "../utils"

type Props = {
  board: BoardType
  gameStats: GameStatsType
}

const GameController = ({ board, gameStats }: Props) => {
  const [player, setPlayer] = useAtom(playerAtom)
  const [_, setGameState] = useAtom(gameStateAtom)
  const onKeyUp = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    const typedActionString = code as keyof typeof Controls
    const action = actionForKey(typedActionString)
    if (action === Action.QUIT) {
      setGameState(GameStateType.GAMEOVER)
    }
  }
  const onkeydown = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    const typedActionString = code as keyof typeof Controls
    const action = actionForKey(typedActionString)
    handleInput({ action })
  }

  const handleInput = ({ action }) => {
    playerController({
      action, board, player, setPlayer, setGameState
    })
  }
  return (
    <input
      className="w-32 h-12 hidden_input"
      type="text"
      onKeyDown={onkeydown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  )
}
export default GameController
