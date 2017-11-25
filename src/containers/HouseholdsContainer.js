import React, { Component } from 'react'
import { connect } from 'react-redux'
import Household from '../views/Household'
import LeadDetail from '../views/LeadDetail'
import MemberDetail from '../views/MemberDetail'
import ClientHero from '../views/ClientHero'
import ClientsContainer from './ClientsContainer'
import LeadsContainer from './LeadsContainer'
import { Route, Switch, Link } from 'react-router-dom'
import { fetchHouseholds } from '../redux/modules/Households/actions'
import { fetchMembers } from '../redux/modules/Members/actions'
import { Button, Icon, Container, Divider } from 'semantic-ui-react'

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props)
    props.fetchHouseholds()
    props.fetchMembers()
  }

  render() {
    const clients = this.props.households.filter(h => h.client === true)
    const leads = this.props.households.filter(h => h.client !== true)

    return (
      <Container>
        <div className="household-content">
          <Container textAlign="center">
            <Link to="/households/clients">
              <Button animated>
                <Button.Content visible>Clients</Button.Content>
                <Button.Content hidden>
                  <Icon name="money" />
                </Button.Content>
              </Button>
            </Link>
            <Link to="/households/leads">
              <Button animated>
                <Button.Content visible>Leads</Button.Content>
                <Button.Content hidden>
                  <Icon name="left arrow" />
                </Button.Content>
              </Button>
            </Link>
          </Container>
          <Divider />
          <Switch>
            <Route exact path="/households" component={ClientHero} />
            <Route
              exact
              path="/households/clients"
              render={() => <ClientsContainer clients={clients} />}
            />
            <Route
              exact
              path="/households/leads"
              render={() => <LeadsContainer leads={leads} />}
            />
            <Route
              exact
              path={`/households/clients/:householdId/members/:id`}
              component={MemberDetail}
            />
            <Route path={`/households/clients/:id`} component={Household} />
            <Route path={`/households/leads/:id`} component={LeadDetail} />
          </Switch>
        </div>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      households: state.households
    }
  },
  { fetchHouseholds, fetchMembers }
)(HouseholdsContainer)
