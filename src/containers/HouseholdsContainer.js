import React, { Component } from 'react'
import { connect } from 'react-redux'
import Household from '../views/Household'
import ClientsContainer from './ClientsContainer'
import LeadsContainer from './LeadsContainer'
import { Route, Switch, Link } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props)
    props.fetchHouseholds()
  }

  render() {
    return (
      <div className="households-container">
        <div className="household-content">
          <Link to="/households/clients">Clients</Link>
          <Link to="/households/leads">Leads</Link>
          <Switch>
            <Route exact path="/households/clients" component={ClientsContainer} />
            <Route path="/households/leads" component={LeadsContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchHouseholds })(HouseholdsContainer)