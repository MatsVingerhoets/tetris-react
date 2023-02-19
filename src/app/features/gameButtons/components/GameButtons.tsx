const GameButtons = ({ score }: { score: number }) => {
    return (
        <div className="w-32 h-32 bg-gray-400">
            <div>Score:{score}</div>
            <div>Level: 1</div>
            <button className="border-solid border border-black block rounded p-1 mb-2 mt-2" onClick={(e) => {
            }}>Play</button>
            <button className="border-solid border border-black block rounded p-1" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}

export default GameButtons