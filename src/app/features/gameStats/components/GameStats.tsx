type Props = {
  gameStats: {
    level: number,
    points: number,
    linesCompleted: number,
    linesPerLevel: number
  }
}
const GameStats = ({ gameStats }: Props) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats
  const linesToLevel = linesPerLevel - linesCompleted
  return (
    <div className="h-3/7 text-right mr-2">
      <h3 className="text-lg text-white">Level</h3>
      <h2 className="text-2xl text-white">{level}</h2>
      <h3 className="text-lg text-white">Lines to level</h3>
      <h2 className="text-2xl text-white">{linesToLevel}</h2>
      <h3 className="text-lg text-white">Score</h3>
      <h2 className="text-2xl text-white">{points}</h2>
    </div>
  )
}
export default GameStats
