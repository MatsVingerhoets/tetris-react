import { atom } from "jotai"
import { GameStatus } from "./types"

export const mapConfigAtom = atom<{
  gameStatus: GameStatus
}>({
  gameStatus: GameStatus.PAUSED
})
