import { atomWithReset } from "jotai/utils"
import { GameStatsType } from "./types"

export const gameStatsAtom = atomWithReset<GameStatsType>({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0
})