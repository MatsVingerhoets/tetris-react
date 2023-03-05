import { NextBlock } from "src/app/features/nextBlock"
import { Board } from "src/app/features/board"
import { ScoreBoard } from "src/app/features/scoreBoard"
import { GameButtons } from "../../gameButtons"
import { useBoard } from "src/app/features/board/hooks/useBoard"

type Props = {
    rows: number,
    columns: number
}
const Layout = ({ rows, columns }: Props) => {
    const { board, setBoard } = useBoard({ rows, columns })
    console.log(board)
    return (
        <>
            <div className="w-32 flex flex-col justify-between mr-2">
                <div className="w-32 h-32 bg-gray-300"></div>
                <GameButtons score={0} />
            </div>
            <Board board={board} />
            <div className="flex flex-col justify-between ml-2">
                <NextBlock />
                <ScoreBoard />
            </div>
        </>
    )
}
export default Layout