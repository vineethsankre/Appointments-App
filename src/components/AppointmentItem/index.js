import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {key, appointmentDetails, toggleStar} = props
  const {id, title, date, isStarred} = appointmentDetails
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleStar(id)
  }

  return (
    <li className="appointment-list-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-btn"
          data-testid="star"
          type="button"
          onClick={onClickStar}
        >
          <img className="star" src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="date">Date: {formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
