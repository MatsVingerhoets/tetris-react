import { NextBlock } from "src/app/features/nextBlock"
import { Board } from "src/app/features/board"
import { ScoreBoard } from "src/app/features/scoreBoard"
import { GameButtons } from "../../gameButtons"

const Layout = () => {
    return (<>
        <div className="w-32 flex flex-col justify-between mr-2">
            <div className="w-32 h-32 bg-gray-300"></div>
            <GameButtons score={0} />
        </div>
        <Board />
        <div className="flex flex-col justify-between ml-2">
            <NextBlock />
            <ScoreBoard />
        </div>
    </>
    )
}
export default Layout