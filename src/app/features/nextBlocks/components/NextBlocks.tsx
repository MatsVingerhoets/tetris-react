import { memo } from "react"
import GridSquare from "../../board/components/defaultCell"
import { Preview } from "src/app/features/Preview"
import { Shape, SHAPES } from "src/tetrominoes"

type Props = {
  tetrominoes: {
    shape: Shape,
    shapeName: SHAPES | undefined
  }[]
}
const NextBlocks = ({ tetrominoes }: Props) => {
  const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse()
  const box = Array(4).fill(Array(4).fill(0))
  // const grid = box.map((rowArray: number[], rowIndex) => {
  //   return rowArray.map((square, colIndex) => {
  //     return <GridSquare key={`${rowIndex}${colIndex}`} color={square} />
  //   })
  // })
  return (
    <div className="w-36 h-3/4 bg-white relative border-bottom-right-clip -ml-0.5">
      <div className="border-bottom-right-clip bg-black absolute top-0.5 bottom-0.5 left-0.5 right-0.5">
        {previewTetrominoes.map((tetromino, index) => (
          <Preview tetromino={tetromino} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
export default memo(NextBlocks)
