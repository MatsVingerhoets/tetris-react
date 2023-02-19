import { atom } from "jotai"
import { GameStateType } from "./types"

export const gameStateAtom = atom<GameStateType>(GameStateType.GAMEOVER)