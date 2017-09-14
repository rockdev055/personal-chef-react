import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseholdSidebar from '../views/HouseholdSidebar'
import HouseholdHero from '../views/HouseholdHero'
import Household from '../views/Household'
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
  const clients = state.households.filter(h => h.client === true)
  return {
    households: clients
  }
}, { fetchHouseholds, fetchMeals })(HouseholdsContainer)