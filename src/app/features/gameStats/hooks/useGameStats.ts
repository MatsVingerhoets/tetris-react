import { useAtom } from "jotai"
import { useCallback } from "react"
import { gameStatsAtom } from "../states"

export const useGameStats = () => {
  const [gameStats, setGameStats] = useAtom(gameStatsAtom)

  const addLinesCleared = useCallback((lines: number) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100
      const { linesPerLevel } = previous
      const newLinesCompleted = previous.linesCompleted + lines
      const level = newLinesCompleted >= linesPerLevel
        ? previous.level + 1
        : previous.level
      const linesCompleted = newLinesCompleted % linesPerLevel
      return {
        level,
        linesCompleted,
        points,
        linesPerLevel
      }
    })
  }, [])
  return [addLinesCleared] as const
}