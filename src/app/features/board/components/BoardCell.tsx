const BoardCell = ({ cell }: any) => {
  return <div className={`w-7 h-7 ${cell.className}`}></div>
}

export default BoardCell
