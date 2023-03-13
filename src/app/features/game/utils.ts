import { Tetromino } from "src/tetrominoes"
import { randomTetromino } from "../Preview/utils"
import { Player } from "./states"

export const buildPlayer = (previous?: Player) => {
  let tetrominoes: Tetromino[]
  if (previous) {
    tetrominoes = [...previous.tetrominoes]
    tetrominoes.unshift(randomTetromino())
  } else {
    // add functionality so the same piece cannot be after eachother
    tetrominoes = Array(5)
      .fill(0)
      .map(() => randomTetromino())
  }
  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop() as Tetromino
  }
}
