import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseholdSidebar from './HouseholdSidebar'
import Household from './Household'
import { Route } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchHouseholds()
  }

  render() {
    return (
      <div className="sidebar-wrapper">
          <Route path='/households' render={() => <HouseholdSidebar url={this.props.match.url} households={this.props.households}/>}/>
          <Route path="/households/:id" render={(props) => <Household {...props} />} />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    households: state.households
  }
}, { fetchHouseholds })(HouseholdsContainer)