import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseholdSidebar from './HouseholdSidebar'
import HouseholdHero from './HouseholdHero'
import Household from './Household'
import { Route, Switch } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'
import { fetchMeals } from '../redux/modules/Meals/actions'

class HouseholdsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchHouseholds()
    this.props.fetchMeals()
  }

  render() {
    return (
      <div className="households-container">
        <div className="households-sidebar">
            <Route path='/households' render={() => <HouseholdSidebar url={this.props.match.url} households={this.props.households}/>}/>
        </div>
        <div className="household-content">
            <Switch>
              <Route exact path="/households" component={HouseholdHero} />
              <Route path="/households/:id" render={(props) => <Household {...props} />} />
            </Switch>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    households: state.households
  }
}, { fetchHouseholds, fetchMeals })(HouseholdsContainer)