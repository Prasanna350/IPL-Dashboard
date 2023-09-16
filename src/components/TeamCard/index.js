// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {name, teamImageUrl, id} = teamCard
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-card-div">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
