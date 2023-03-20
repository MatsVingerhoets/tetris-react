import { useAtom } from "jotai"
import { useEffect } from "react"
import { Player } from "src/app/features/game/states"
import { boardAtom } from "../states"
import { nextBoard } from "../utils"

type Props = {
  rows: number
  columns: number
  player: Player
  newPlayer: () => void
  addLinesCleared: (lines: number) => void
}
export const useBoard = ({
  player,
  newPlayer,
  addLinesCleared
}: Props) => {
  const [_, setBoard] = useAtom(boardAtom)
  useEffect(() => {
    setBoard(previousBoard =>
      nextBoard({
        board: previousBoard,
        player,
        newPlayer,
        addLinesCleared
      })
    )
  }, [player, newPlayer, addLinesCleared])
  return { newPlayer }
}
