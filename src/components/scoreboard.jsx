export default function Scoreboard({current, best}) {
  return (
    <div className="scoreboard">
      <p className="currentScore">
        Current Score: {current}
      </p>
      <p className="bestScore">
        Best Score: {best}
      </p>
    </div>
  )
}