import { useAtom } from "jotai"
import { useCallback } from "react"
import { playerAtom } from "../states"
import { buildPlayer } from "../utils"

export const usePlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom)

  const resetPlayer = useCallback(() => {
    setPlayer(buildPlayer(player))
  }, [])

  return resetPlayer
}