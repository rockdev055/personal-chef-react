import React, { Component } from 'react'
import HouseholdSidebar from './HouseholdSidebar'
import Household from './Household'
import ApiService from '../services/Api'
import { Route } from 'react-router-dom'

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      households: []
    }
  }

  componentDidMount() {
    ApiService.get(`/households`).then(households => this.setState({
      households: households
    }))
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <HouseholdSidebar url={this.props.match.url} households={this.state.households}/>
        </div>
        <div className="household-main">
          <Route path={`${this.props.match.url}/:id`} component={Household} />
        </div>
      </div>
    )
  }
}

export default HouseholdsContainer