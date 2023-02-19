import { Board } from "src/app/features/board"
import { NextBlock } from "src/app/features/nextBlock"
import { ScoreBoard } from "src/app/features/scoreBoard"
import { MessagePopup } from "src/app/features/messagePopup"

const Layout = () => {
  return (
    <div className="flex justify-center content-center flex-wrap w-screen h-screen">
      <MessagePopup />
      <div className="w-32 flex flex-col justify-between mr-2">
        <div className="w-32 h-32 bg-gray-300"></div>
        <div className="w-32 h-32 bg-gray-600"></div>
      </div>
      <Board />
      <div className="w-32 flex flex-col justify-between ml-2">
        <NextBlock />
        <ScoreBoard />
      </div>
    </div>
  )
}
export default Layout
