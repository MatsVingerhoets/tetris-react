import { useAtom } from "jotai"
import { useState, useCallback } from "react"
import { gameStatsAtom } from "../states"

export const useGameStats = () => {
  const [gameStats, setGameStats] = useAtom(gameStatsAtom)
  const addLinesCleared = useCallback(() => { }, [])
  return [gameStats, addLinesCleared] as const
}