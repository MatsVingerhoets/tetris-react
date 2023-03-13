import { Tetromino } from "src/tetrominoes"
import { randomTetromino } from "../Preview/utils"
import { Player } from "./states"

export const buildPlayer = (previous?: Player) => {
  const tetrominoes = (() => {
    if (previous) {
      const newList = previous.tetrominoes
      newList.unshift(randomTetromino())
      return newList
    } else {
      const set = new Set<Tetromino>()
      while (set.size < 5) {
        set.add(randomTetromino())
      }
      return Array.from(set)
    }
  })()
  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop() as Tetromino
  }
}
