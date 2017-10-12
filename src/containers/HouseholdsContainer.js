import React, { Component } from 'react'
import { connect } from 'react-redux'
import Household from '../views/Household'
import LeadDetail from '../views/LeadDetail'
import ClientsContainer from './ClientsContainer'
import LeadsContainer from './LeadsContainer'
import { Route, Switch, Link } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'
import { Button, Icon } from 'semantic-ui-react'

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props)
    props.fetchHouseholds()
  }

  render() {
    return (
      <div className="households-container">
        <div className="household-content">
          <Link to="/households/clients">
            <Button animated>
              <Button.Content visible>Clients</Button.Content>
              <Button.Content hidden>
                <Icon name='money' />
              </Button.Content>
            </Button>
          </Link>
          <Link to="/households/leads">
            <Button animated>
              <Button.Content visible>Leads</Button.Content>
              <Button.Content hidden>
                <Icon name='left arrow' />
              </Button.Content>
            </Button>
          </Link>
          <Switch>
            <Route exact path="/households/clients" component={ClientsContainer} />
            <Route exact path="/households/leads" component={LeadsContainer} />
            <Route path={`/households/clients/:id`} component={Household} />
            <Route path={`/households/leads/:id`} component={LeadDetail} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchHouseholds })(HouseholdsContainer)