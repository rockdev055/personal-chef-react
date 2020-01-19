import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Icon, Container, Divider } from 'semantic-ui-react';
import { fetchHouseholds } from '../redux/modules/Households/actions';
import Household from '../views/Household';
import LeadDetail from '../views/LeadDetail';
import MemberDetail from '../views/MemberDetail';
import ClientHero from '../views/ClientHero';
import ClientsContainer from './ClientsContainer';
import LeadsContainer from './LeadsContainer';
import { fetchMembers } from '../redux/modules/Members/actions';

class HouseholdsContainer extends Component {
  constructor(props) {
    super(props);
    props.fetchHouseholds();
    props.fetchMembers();
  }

  render() {
    const { households } = this.props;
    const clientList = households.filter(h => h.client === true);
    const leadList = households.filter(h => h.client !== true);

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
            <Route exact path="/households/clients" render={() => <ClientsContainer clients={clientList} />} />
            <Route exact path="/households/leads" render={() => <LeadsContainer leads={leadList} />} />
            <Route exact path="/households/clients/:householdId/members/:id" component={MemberDetail} />
            <Route path="/households/clients/:id" component={Household} />
            <Route path="/households/leads/:id" component={LeadDetail} />
          </Switch>
        </div>
      </Container>
    );
  }
}

HouseholdsContainer.propTypes = {
  households: PropTypes.array,
  fetchHouseholds: PropTypes.func,
  fetchMembers: PropTypes.func,
};

export default connect(({ households }) => ({ households }), { fetchHouseholds, fetchMembers })(HouseholdsContainer);
