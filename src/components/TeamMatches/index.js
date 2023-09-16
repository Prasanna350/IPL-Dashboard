// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {teamMatchesObject: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getId = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return id
  }

  getTeamDetails = async () => {
    const id = this.getId()
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchesObject: updatedData, isLoading: false})
  }

  render() {
    const bgClassName = this.getId()
    const {teamMatchesObject, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesObject
    return isLoading ? (
      <div className={`loader-card2 ${bgClassName}`} data-testid="loader">
        <Loader type="Oval" color="#ffffff" width={40} height={40} />
      </div>
    ) : (
      <div className={`team-matches-bg-card ${bgClassName}`}>
        <div className="team-matches-card">
          <div className="team-banner-card">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-matches-img"
            />
          </div>
          <div className="team-matches-latest-card">
            <p className="latest-match-head">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
          </div>
          <ul className="team-matches-match-cards-card">
            {recentMatches.map(eachMatch => (
              <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
