import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Grid, Card, Header, Button, Input } from 'semantic-ui-react';
import { convertLead } from '../redux/modules/Households/actions';
import HouseholdNotes from '../components/HouseholdNotes';
import NewNote from '../components/NewNote';

class LeadDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      converting: false,
      rate: 0,
    };
  }

  submit = e => {
    e.preventDefault();
    const { rate } = this.state;
    const { convertLead, history, lead } = this.props;
    const newRate = { monthly_rate: rate };

    convertLead(lead.id, newRate, history);
  };

  cancel = () => {
    this.setState({
      converting: false,
    });
  };

  handleConvert = () => {
    this.setState({
      converting: true,
    });
  };

  handleRateChange = e => {
    this.setState({
      rate: e.target.value,
    });
  };

  render() {
    const { lead } = this.props;
    const { converting } = this.state;
    if (lead) {
      return (
        <Grid>
          <Grid.Row textAlign="center" columns={1}>
            <Card centered raised>
              <Card.Content>
                <Header as="h1">{lead.name}</Header>

                <Header as="h3">Potential Monthly: ({numeral(lead.monthly_rate).format('$0,0.00')})</Header>
              </Card.Content>
            </Card>
          </Grid.Row>
          <Grid.Row textAlign="center" columns={1}>
            <Grid.Column width={7} textAlign="centered">
              <Card centered raised fluid>
                <Card.Content>
                  {!converting ? (
                    <Button primary onClick={this.handleConvert}>
                      Convert Client
                    </Button>
                  ) : null}
                  {converting ? (
                    <div>
                      <form onSubmit={this.submit}>
                        <h3>Monthly Rate</h3>
                        <Input onChange={this.handleRateChange} type="text" required />
                        <br />
                        <Button positive>Convert</Button>
                      </form>
                      <Button color="red" onClick={this.cancel}>
                        Cancel
                      </Button>
                    </div>
                  ) : null}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10} textAlign="centered">
              <Card centered raised fluid>
                <Card.Content>
                  <NewNote householdId={lead.id} />
                  <HouseholdNotes notes={lead.notes} />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    return null;
  }
}

LeadDetail.propTypes = {
  lead: PropTypes.object,
  history: PropTypes.object,
  convertLead: PropTypes.func,
};

export default connect(
  (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id, 10);
    const lead = state.households.find(h => h.id === id);
    return {
      lead,
    };
  },
  { convertLead }
)(LeadDetail);
