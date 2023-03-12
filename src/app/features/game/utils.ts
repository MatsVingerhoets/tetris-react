import { Tetromino } from "src/tetrominoes"
import { randomTetromino } from "../Preview/utils"
import { Player } from "./states"

export const buildPlayer = (previous?: Player) => {
  let tetrominoes: Tetromino[]
  if (previous) {
    tetrominoes = [...previous.tetrominoes]
    tetrominoes.unshift(randomTetromino())
  } else {
    tetrominoes = Array(5).fill(0).map(() => randomTetromino())
  }
  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 0 },
    tetrominoes,
    tetromino: tetrominoes.pop() as Tetromino
  }
}