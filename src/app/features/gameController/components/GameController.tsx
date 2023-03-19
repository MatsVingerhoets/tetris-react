import { useAtom } from "jotai"
import { useResetAtom } from "jotai/utils"
import { KeyboardEvent } from "react"
import { playerAtom, playerWithTetrominoesAtom } from "src/app/features/game/states"
import { useInterval } from "src/app/hooks/useInterval"
import { boardAtom } from "../../board/states"
import { gameStateAtom } from "../../gameOver/states"
import { GameStateType } from "../../gameOver/types"
import { tetrominoesAtom } from "../../nextBlocks/states"
import { Action } from "../types"
import { actionForKey, Controls, playerController } from "../utils"

const GameController = () => {
  const [board] = useAtom(boardAtom)
  const [player] = useAtom(playerWithTetrominoesAtom)
  const [, setPlayer] = useAtom(playerAtom)
  const [, setGameState] = useAtom(gameStateAtom)
  const [, setTetrominoes] = useAtom(tetrominoesAtom)
  const resetBoard = useResetAtom(boardAtom)
  const resetPlayer = useResetAtom(playerAtom)

  useInterval(() => handleInput({ action: Action.SLOWDROP }), 1000)

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

  const handleInput = ({ action }: { action: Action }) => {
    playerController({
      action, board, player, setPlayer, setGameState, resetBoard, resetPlayer, setTetrominoes
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
