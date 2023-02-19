import GridSquare from "./GridSquare"

const Board = () => {
  const grid: JSX.Element[][] = []
  for (let row = 0; row < 18; row++) {
    grid.push([])
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color={1} />)
    }
  }
  return (
    <div className="w-fit">
      <div className="grid grid-cols-10 gap-0">
        {grid}
      </div>
    </div>
  )
}

export default Board
