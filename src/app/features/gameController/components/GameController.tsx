import { useAtom } from "jotai"
import { useResetAtom } from "jotai/utils"
import { KeyboardEvent } from "react"
import {
  playerAtom,
  playerWithTetrominoesAtom
} from "src/app/features/game/states"
import { boardAtom } from "src/app/features/board/states"
import { gameStateAtom } from "src/app/features/gameOver/states"
import { GameStateType } from "src/app/features/gameOver/types"
import { gameStatsAtom } from "src/app/features/gameStats/states"
import { tetrominoesAtom } from "src/app/features/nextBlocks/states"
import { Action } from "../types"
import {
  actionForKey,
  Controls,
  playerController,
  actionIsDrop
} from "../utils"
import { useDropTime } from "../hooks/useDropTime"
import Timer from "./Timer"

const GameController = () => {
  const [board] = useAtom(boardAtom)
  const [player] = useAtom(playerWithTetrominoesAtom)
  const [, setPlayer] = useAtom(playerAtom)
  const [, setGameState] = useAtom(gameStateAtom)
  const [, setTetrominoes] = useAtom(tetrominoesAtom)
  const [gameStats] = useAtom(gameStatsAtom)
  const resetBoard = useResetAtom(boardAtom)
  const resetPlayer = useResetAtom(playerAtom)

  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats
  })

  const onKeyUp = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    const typedActionString = code as keyof typeof Controls
    const action = actionForKey(typedActionString)
    if (actionIsDrop(action)) resumeDropTime()
  }
  const onkeydown = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    const typedActionString = code as keyof typeof Controls
    const action = actionForKey(typedActionString)
    if (action === Action.PAUSE) {
      if (dropTime) {
        pauseDropTime()
      } else {
        resumeDropTime()
      }
    } else if (action === Action.QUIT) {
      setGameState(GameStateType.GAMEOVER)
    } else {
      if (actionIsDrop(action)) pauseDropTime()
      handleInput({ action })
    }
  }

  const handleInput = ({ action }: { action: Action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameState,
      resetBoard,
      resetPlayer,
      setTetrominoes
    })
  }
  return (
    <>
      {dropTime && <Timer dropTime={dropTime} handleInput={handleInput} />}
      <input
        className="w-32 h-12 hidden_input"
        type="text"
        onKeyDown={onkeydown}
        onKeyUp={onKeyUp}
        autoFocus
      />
    </>
  )
}
export default GameController
