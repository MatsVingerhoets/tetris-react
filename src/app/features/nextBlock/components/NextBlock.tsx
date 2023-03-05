import GridSquare from "../../board/components/defaultCell"

const NextBlock = () => {
  const box = Array(4).fill(Array(4).fill(0))
  // const grid = box.map((rowArray: number[], rowIndex) => {
  //   return rowArray.map((square, colIndex) => {
  //     return <GridSquare key={`${rowIndex}${colIndex}`} color={square} />
  //   })
  // })
  return <div className="w-28 grid grid-cols-4">nextBlock</div>
}
export default NextBlock
