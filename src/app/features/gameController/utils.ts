import { SetStateAction } from "jotai"
import { BoardType } from "src/app/features/board/types"
import { Player } from "src/app/features/game/states"
import { GameStateType } from "src/app/features/gameOver/types"
import { hasCollision, isWithinBoard, rotate } from "src/app/features/board/utils"
import { Action } from "./types"
import { Shape } from "src/tetrominoes"

type Props = {
  action: Action,
  board: BoardType,
  player: Player,
  setPlayer: (update: SetStateAction<Player>) => void
  setGameState: (update: SetStateAction<GameStateType>) => void
}
type MovePlayerProps = {
  board: BoardType,
  delta: { row: number, column: number },
  position: { row: number, column: number },
  shape: Shape
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

export const movePlayer = ({ delta, position, shape, board }: MovePlayerProps) => {
  const desiredNextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column
  }
  const collided = hasCollision({
    board,
    position: desiredNextPosition,
    shape
  })
  const isOnBoard = isWithinBoard({
    board,
    position: desiredNextPosition,
    shape
  })
  const preventMove = !isOnBoard || (isOnBoard && collided)
  const nextPosition = preventMove ? position : desiredNextPosition
  const isMovingDown = delta.row > 0
  const isHit = isMovingDown && (collided || !isOnBoard)
  return { collided: isHit, nextPosition }
}

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

const attemptMovement = ({ board, action, player, setGameState, setPlayer }: Props) => {
  const delta = { row: 0, column: 0 }
  let isFastDropping = false
  if (action === Action.FASTDROP) {
    isFastDropping = true
  } else if (action === Action.SLOWDROP) {
    delta.row += 1
  } else if (action === Action.LEFT) {
    delta.column += -1
  } else if (action === Action.RIGHT) {
    delta.column -= -1
  }
  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board
  })
  const isGameOver = collided && player.position.row === 0
  if (isGameOver) {
    setGameState(GameStateType.GAMEOVER)
  }
  setPlayer({
    ...player,
    collided,
    isFastDropping,
    position: nextPosition
  })
}

export const playerController = ({ action, board, player, setPlayer, setGameState }: Props) => {
  if (!action) return
  if (action === Action.ROTATE) {
    attemptRotation({ board, player, setPlayer })
  } else {
    attemptMovement({ board, player, action, setGameState, setPlayer })
  }
}