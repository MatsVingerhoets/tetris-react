import { atom } from "jotai"
import { Tetromino } from "src/tetrominoes"
import { buildPlayer } from "./utils"

export type Player = {
  collided: boolean,
  isFastDropping: boolean,
  position: { row: number, column: number },
  tetrominoes: Tetromino[],
  tetromino: Tetromino
}

export const playerAtom = atom<Player>(buildPlayer())
