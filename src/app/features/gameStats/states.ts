import { atom } from "jotai"
import { GameStatsType } from "./types"

export const gameStatsAtom = atom<GameStatsType>({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0
})