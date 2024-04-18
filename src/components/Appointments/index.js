import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    isFilterActive: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state
    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  getFilteredAppointmentsList = () => {
    const {appointmentList, isFilterActive} = this.state
    if (isFilterActive) {
      return appointmentList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
    }
    return appointmentList
  }

  renderAppointmentsList = () => {
    const {appointmentList} = this.state
    return appointmentList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleStar={this.toggleStar}
      />
    ))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {titleInput, dateInput, isFilterActive} = this.state
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="title">Add Appointment</h1>
          <form onSubmit={this.onAddAppointment}>
            <div className="input-container">
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                className="title-input"
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="date">
                DATE
              </label>
              <input
                className="date-input"
                type="date"
                id="date"
                value={dateInput}
                onChange={this.onChangeDate}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            className="image"
            alt="appointments"
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          />
          <hr className="line" />
          <div className="appointment-button-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              className="starred-btn"
              type="button"
              onClick={this.showStarred}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list">{this.renderAppointmentsList()}</ul>
        </div>
      </div>
    )
  }
}
export default Appointments
