import { atom } from "jotai"
import { atomWithReset } from "jotai/utils"
import { Tetromino } from "src/tetrominoes"
import { tetrominoesAtom } from "../nextBlocks/states"
import { buildPlayer } from "./utils"

export type DefaultPlayer = {
  collided: boolean,
  isFastDropping: boolean,
  position: { row: number, column: number },
}

export type Player = DefaultPlayer & {
  tetrominoes: Tetromino[],
  currentTetromino: Tetromino
}

export const playerAtom = atomWithReset<DefaultPlayer>(buildPlayer())

export const playerWithTetrominoesAtom = atom<Player>(get => {
  const player = get(playerAtom)
  const tetrominoes = get(tetrominoesAtom)
  return { ...player, tetrominoes, currentTetromino: tetrominoes[tetrominoes.length - 1] }
})
