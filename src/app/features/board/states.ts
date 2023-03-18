import { atom } from "jotai"
import { BoardType } from "./types"
import { buildBoard } from "./utils"

export const boardAtom = atom<BoardType>(buildBoard({ rows: 18, columns: 10 }))