import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseholdSidebar from '../views/HouseholdSidebar'
import HouseholdHero from '../views/HouseholdHero'
import Household from '../views/Household'
import { Route, Switch } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'
import { fetchMeals } from '../redux/modules/Meals/actions'

class LeadsContainer extends Component {

  componentDidMount() {
    this.props.fetchHouseholds()
    this.props.fetchMeals()
  }

  render() {
    return (
      <div className="households-container">
        <div className="households-sidebar">
          <Route path='/leads' render={() => <HouseholdSidebar url={this.props.match.url} households={this.props.leads} />} />
        </div>
        <div className="household-content">
          <Switch>
            <Route exact path="/leads" component={HouseholdHero} />
            <Route path="/leads/:id" render={(props) => <Household {...props} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const leads = state.households.filter(h => h.client === false)
  return {
    leads
  }
}

export default connect(mapStateToProps, { fetchHouseholds, fetchMeals })(LeadsContainer)