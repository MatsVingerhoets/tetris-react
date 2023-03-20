import { SetStateAction } from "jotai"
import { BoardType } from "src/app/features/board/types"
import { DefaultPlayer, Player } from "src/app/features/game/states"
import { GameStateType } from "src/app/features/gameOver/types"
import {
  hasCollision,
  isWithinBoard,
  rotate
} from "src/app/features/board/utils"
import { Action } from "./types"
import { Shape, Tetromino } from "src/tetrominoes"

type Props = {
  action: Action
  board: BoardType
  player: Player
  setPlayer: (update: SetStateAction<DefaultPlayer>) => void
  setGameState: (update: SetStateAction<GameStateType>) => void
  setTetrominoes: (update: SetStateAction<Tetromino[]>) => void
  resetBoard: () => void
  resetPlayer: () => void
}
type MovePlayerProps = {
  board: BoardType
  delta: { row: number; column: number }
  position: { row: number; column: number }
  shape: Shape
}

export const Controls = {
  ArrowUp: Action.ROTATE,
  ArrowDown: Action.SLOWDROP,
  ArrowLeft: Action.LEFT,
  ArrowRight: Action.RIGHT,
  KeyQ: Action.QUIT,
  Space: Action.FASTDROP,
  KeyP: Action.PAUSE
}

export const actionForKey = (keyCode: keyof typeof Controls) =>
  Controls[keyCode]

export const actionIsDrop = (action: Action) =>
  [Action.SLOWDROP, Action.FASTDROP].includes(action)

export const movePlayer = ({
  delta,
  position,
  shape,
  board
}: MovePlayerProps) => {
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

const attemptRotation = ({
  board,
  player,
  setTetrominoes
}: Omit<
  Props,
  "action" | "setPlayer" | "setGameState" | "resetBoard" | "resetPlayer"
>) => {
  const rotatedShape = rotate({
    piece: player.currentTetromino.shape,
    direction: 1
  })
  const position = player.position
  const isValidRotation =
    isWithinBoard({ board, position, shape: rotatedShape }) &&
    !hasCollision({ board, position, shape: rotatedShape })
  if (isValidRotation) {
    const newTetrominoes = [
      ...player.tetrominoes.slice(0, player.tetrominoes.length - 1),
      {
        ...player.currentTetromino,
        shape: rotatedShape
      }
    ]
    setTetrominoes(newTetrominoes)
  }
}

const attemptMovement = ({
  board,
  action,
  player,
  setGameState,
  setPlayer,
  resetBoard,
  resetPlayer
}: Omit<Props, "setTetrominoes">) => {
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
    shape: player.currentTetromino.shape,
    board
  })
  console.log({ collided })
  const isGameOver = collided && player.position.row === 0
  if (isGameOver) {
    resetBoard()
    resetPlayer()
    setGameState(GameStateType.GAMEOVER)
  } else {
    setPlayer({
      collided,
      isFastDropping,
      position: nextPosition
    })
  }
}

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setGameState,
  resetBoard,
  resetPlayer,
  setTetrominoes
}: Props) => {
  if (!action) return
  if (action === Action.ROTATE) {
    attemptRotation({ board, player, setTetrominoes })
  } else {
    attemptMovement({
      board,
      player,
      action,
      setGameState,
      setPlayer,
      resetBoard,
      resetPlayer
    })
  }
}
