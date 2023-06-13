import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'
import VaccinationByGender from '../VaccinationByGender'

const apiStatusContraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    data7days: [],
    dataVaccinationByAge: [],
    dataVaccinationByGender: [],
    apiStatus: apiStatusContraints.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusContraints.in_progress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.data7days(data)
      this.vaccinationByAge(data)
      this.vaccinationByGender(data)
    } else {
      this.setState({apiStatus: apiStatusContraints.failure})
    }
  }

  data7days = data => {
    const updated7DaysVaccination = data.last_7_days_vaccination.map(each => ({
      dose1: each.dose_1,
      dose2: each.dose_2,
      vaccineDate: each.vaccine_date,
    }))

    this.setState({
      data7days: updated7DaysVaccination,
      apiStatus: apiStatusContraints.success,
    })
  }

  vaccinationByAge = data => {
    const vaccinationAge = data.vaccination_by_age.map(each => ({
      age: each.age,
      count: each.count,
    }))

    this.setState({dataVaccinationByAge: vaccinationAge})
  }

  vaccinationByGender = data => {
    const vaccinationGender = data.vaccination_by_gender.map(each => ({
      count: each.count,
      gender: each.gender,
    }))
    console.log(vaccinationGender)

    this.setState({dataVaccinationByGender: vaccinationGender})
  }

  renderInProgressNote = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" width={50} height={50} />
    </div>
  )

  renderFailureNote = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderSuccessNote = () => {
    const {
      data7days,
      dataVaccinationByAge,
      dataVaccinationByGender,
    } = this.state
    return (
      <div>
        <VaccinationCoverage data={data7days} />
        <VaccinationByGender data={dataVaccinationByGender} />
        <VaccinationByAge data={dataVaccinationByAge} />
      </div>
    )
  }

  renderStatus = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)

    switch (apiStatus) {
      case apiStatusContraints.success:
        return this.renderSuccessNote()
      case apiStatusContraints.in_progress:
        return this.renderInProgressNote()
      case apiStatusContraints.failure:
        return this.renderFailureNote()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <img
            className="cowin-img"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="header-cowin">Co-WIN</h1>
        </div>
        {this.renderStatus()}
      </div>
    )
  }
}

export default CowinDashboard
