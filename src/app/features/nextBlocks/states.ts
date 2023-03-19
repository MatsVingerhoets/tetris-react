import { atom } from "jotai"
import { Tetromino } from "src/tetrominoes"
import { randomTetromino } from "../Preview/utils"

export const fillTetrominoes = () => {
  const set = new Set<Tetromino>()
  while (set.size < 4) {
    set.add(randomTetromino())
  }
  return Array.from(set)
}

export const newTetrominoesList = ((previous: Tetromino[]) => {
  const newList = previous
  newList.unshift(randomTetromino())
  newList.pop()
  return newList
})

export const tetrominoesAtom = atom<Tetromino[]>(fillTetrominoes())

