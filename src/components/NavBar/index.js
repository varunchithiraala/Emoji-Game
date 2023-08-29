// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="emoji-game-nav-bar-container">
      <div className="title-and-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-game-logo"
            alt="emoji logo"
          />
          <h1 className="emoji-game-title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="emoji-game-scores-container">
            <p className="emoji-game-score">Score: {currentScore}</p>
            <p className="emoji-game-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
