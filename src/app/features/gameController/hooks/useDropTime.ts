import { useState, useCallback, useEffect } from "react"
import { GameStatsType } from "../../gameStats/types"

const DEFAULT_DROPTIME = 1000
const MINIMUM_DROPTIME = 100
const SPEED_INCREMENT = 50

export const useDropTime = ({ gameStats }: { gameStats: GameStatsType }) => {
  const [dropTime, setDropTime] = useState<number | null>(DEFAULT_DROPTIME)
  const [previousDropTime, setPreviousDropTime] = useState<number | null>()

  const resumeDropTime = useCallback(() => {
    if (!previousDropTime) {
      return
    }
    setDropTime(previousDropTime)
    setPreviousDropTime(null)
  }, [previousDropTime])

  const pauseDropTime = useCallback(() => {
    if (dropTime) {
      setPreviousDropTime(dropTime)
    }
    setDropTime(null)
  }, [dropTime, setPreviousDropTime])

  useEffect(() => {
    const speed = SPEED_INCREMENT * (gameStats.level - 1)
    const newDropTime = Math.max(DEFAULT_DROPTIME - speed, MINIMUM_DROPTIME)
    setDropTime(newDropTime)
  }, [gameStats.level, setDropTime])
  return [dropTime, pauseDropTime, resumeDropTime] as const
}
