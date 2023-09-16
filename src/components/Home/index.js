// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachObject => ({
      name: eachObject.name,
      id: eachObject.id,
      teamImageUrl: eachObject.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="ipl-home-bg-container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="ipl-logo-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader-card" data-testid="loader">
            <Loader type="Oval" color="#ffffff" width={40} height={40} />
          </div>
        ) : (
          <ul className="team-cards-container">
            {teamsList.map(teamCard => (
              <TeamCard teamCard={teamCard} key={teamCard.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
