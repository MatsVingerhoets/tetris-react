import { useAtom } from "jotai"
import { useEffect } from "react"
import { Player } from "src/app/features/game/states"
import { boardAtom } from "../states"
import { nextBoard } from "../utils"

type Props = {
  rows: number
  columns: number
  player: Player
  resetPlayer: () => void
  addLinesCleared: () => void
}
export const useBoard = ({
  player,
  resetPlayer,
  addLinesCleared
}: Props) => {
  const [_, setBoard] = useAtom(boardAtom)
  useEffect(() => {
    setBoard(previousBoard =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared
      })
    )
  }, [player, resetPlayer, addLinesCleared])
  return { resetPlayer }
}
