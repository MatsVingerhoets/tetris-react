import GridSquare from "./GridSquare"

const Board = () => {
  return (
    <div className="w-fit">
      <div className="grid grid-rows-18 gap-0">
        {[...Array(18)].map((_, j) => (
          <div key={j} className="grid grid-cols-10 gap-0">
            {[...Array(10)].map((e, i) => (
              <GridSquare key={e + i}></GridSquare>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
