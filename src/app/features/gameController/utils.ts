import { SetStateAction } from "jotai"
import { BoardType } from "src/app/features/board/types"
import { Player } from "src/app/features/game/states"
import { GameStateType } from "src/app/features/gameOver/types"
import { hasCollision, isWithinBoard, rotate } from "src/app/features/board/utils"
import { Action } from "./types"

type Props = {
  action: Action,
  board: BoardType,
  player: Player,
  setPlayer: (update: SetStateAction<Player>) => void
  setGameState: (update: SetStateAction<GameStateType>) => void

}
export const Controls = {
  ArrowUp: Action.ROTATE,
  ArrowDown: Action.SLOWDROP,
  ArrowLeft: Action.LEFT,
  ArrowRight: Action.RIGHT,
  KeyQ: Action.QUIT,
  Space: Action.FASTDROP
}

export const actionForKey = (keyCode: keyof typeof Controls) =>
  Controls[keyCode]

const attemptRotation = ({ board, player, setPlayer }: Omit<Props, "action" | "setGameState">) => {
  const rotatedShape = rotate({ piece: player.tetromino.shape, direction: 1 })
  const position = player.position
  const isValidRotation = isWithinBoard({ board, position, shape: rotatedShape }) && !hasCollision({ board, position, shape: rotatedShape })
  if (isValidRotation) {
    setPlayer({
      ...player,
      tetromino: {
        ...player.tetromino,
        shape: rotatedShape
      }
    })
  }
}

export const playerController = ({ action, board, player, setPlayer, setGameState }: Props) => {
  if (!action) return
  console.log({ action })
  if (action === Action.ROTATE) {
    attemptRotation({ board, player, setPlayer })
  }
}