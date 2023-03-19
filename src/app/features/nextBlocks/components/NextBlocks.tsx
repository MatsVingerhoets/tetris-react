import { useAtom } from "jotai"
import { memo } from "react"
import { Preview } from "src/app/features/Preview"
import { playerWithTetrominoesAtom } from "../../game/states"
import { tetrominoesAtom } from "../states"


const NextBlocks = () => {
  const [player] = useAtom(playerWithTetrominoesAtom)
  const previewTetrominoes = player.tetrominoes.slice(0, player.tetrominoes.length - 1).reverse()
  return (
    <div className="w-44 h-3/4 bg-white relative border-bottom-right-clip -ml-0.5">
      <div className="border-bottom-right-clip bg-black absolute top-0.5 bottom-0.5 left-0.5 right-0.5 pt-7">
        {previewTetrominoes.map((tetromino, index) => (
          <Preview tetromino={tetromino} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
export default memo(NextBlocks)
