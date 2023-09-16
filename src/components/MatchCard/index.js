// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  getMatchCard = () => {
    const {eachMatch} = this.props
    const updatedMatchCard = {
      result: eachMatch.result,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      matchStatus: eachMatch.match_status,
    }
    return updatedMatchCard
  }

  render() {
    const matchCardObj = this.getMatchCard()
    const {competingTeamLogo, competingTeam, result, matchStatus} = matchCardObj
    const isWon = matchStatus === 'Won'
    const matchStatusClass = isWon ? 'match-card-win' : 'match-card-loss'
    return (
      <li className="match-card-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-img"
        />
        <p className="match-card-head">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className={`match-card-status ${matchStatusClass}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
