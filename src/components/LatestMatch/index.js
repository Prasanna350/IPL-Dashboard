// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  getUpdatedObject = () => {
    const {latestMatchDetails} = this.props
    const updatedObject = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    return updatedObject
  }

  render() {
    const latestMatchDetails = this.getUpdatedObject()
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails
    return (
      <div className="latest-match-card competing-team-all-cards">
        <div className="competing-team-first-cards">
          <p className="latest-competing-team">{competingTeam}</p>
          <p className="latest-date">{date}</p>
          <p className="latest-small-para">{venue}</p>
          <p className="latest-small-para">{result}</p>
        </div>
        <div className="competing-team-second-cards">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="competing-team-third-cards competing-team-all-cards">
          <p className="latest-small-heads">First Innings</p>
          <p className="latest-small-para">{firstInnings}</p>
          <p className="latest-small-heads">Second Innings</p>
          <p className="latest-small-para">{secondInnings}</p>
          <p className="latest-small-heads">Man of the Match</p>
          <p className="latest-small-para">{manOfTheMatch}</p>
          <p className="latest-small-heads">Umpires</p>
          <p className="latest-small-para">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
