import { atomWithReset } from "jotai/utils"
import { BoardType } from "./types"
import { buildBoard } from "./utils"

export const boardAtom = atomWithReset<BoardType>(buildBoard({ rows: 18, columns: 10 }))