import { useState, useEffect } from "react"
import { Player } from "src/app/features/game/states"
import { buildBoard, nextBoard } from "../utils"

type Props = {
  rows: number
  columns: number
  player: Player
  resetPlayer: () => void
  addLinesCleared: () => void
}
export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared
}: Props) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }))

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
  return { board, setBoard, resetPlayer }
}
