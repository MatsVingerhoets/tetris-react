import { useAtom } from "jotai"
import { useCallback } from "react"
import { newTetrominoesList, tetrominoesAtom } from "../../nextBlocks/states"
import { playerAtom } from "../states"
import { buildPlayer } from "../utils"

export const usePlayer = () => {
  const [tetrominoes, setTetrominoes] = useAtom(tetrominoesAtom)
  const [, setPlayer] = useAtom(playerAtom)

  const newPlayer = useCallback(() => {
    setTetrominoes(newTetrominoesList(tetrominoes))
    setPlayer(buildPlayer())
  }, [])

  return { newPlayer }
}
