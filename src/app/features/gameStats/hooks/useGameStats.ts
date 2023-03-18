import { useAtom } from "jotai"
import { useState, useCallback } from "react"
import { gameStatsAtom } from "../states"

export const useGameStats = () => {
  const addLinesCleared = useCallback(() => { }, [])
  return [addLinesCleared] as const
}