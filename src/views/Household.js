import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { Card, Grid, Divider, Container, Select, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import styled from 'styled-components';
import { createHouseholdMeal } from '../redux/modules/HouseholdMeals/actions';
import { createEngagementMeal } from '../redux/modules/Engagements/actions';
import NewHouseholdMember from '../components/NewHouseholdMember';
import NewEngagement from '../components/NewEngagement';
import EngagementMeals from './EngagementMeals';
import HouseholdNotes from '../components/HouseholdNotes';
import NewNote from '../components/NewNote';

const styleInput = styled.div`
  display: flex;
`;

class Household extends Component {
  constructor() {
    super();

    this.state = {
      mealId: null,
    };
  }

  handleOnChange = id => {
    const { match, createHouseholdMeal } = this.props;
    const householdId = parseInt(match.params.id, 10);
    createHouseholdMeal(id, householdId);
  };

  onSelectChange = (e, { value }) => {
    this.setState({
      mealId: value,
    });
  };

  handleOnAddMeal = household => {
    const { createEngagementMeal } = this.props;
    const { mealId } = this.state;
    if (!household.engagement.meal_ids.includes(mealId)) {
      createEngagementMeal(household.engagement.id, mealId, household.id);
    }
  };

  render() {
    const { households, members, match, meals } = this.props;
    const id = parseInt(match.params.id, 10);
    const household = households.find(h => h.id === id);
    const mealOptions = meals.map(meal => ({
      key: `${meal.name.toLowerCase()}-${meal.id}`,
      text: meal.name,
      value: meal.id,
    }));

    if (household) {
      return (
        <Grid divided="vertically">
          <Grid.Row textAlign="center" columns={3} stretched>
            <Grid.Column>
              <Card centered raised>
                <Card.Content>
                  <Card.Header>
                    <h3>{household.name} Family</h3>
                  </Card.Header>
                  <Divider />
                  <p>{household.address}</p>
                  <p>{numeral(household.monthly_rate).format('$0,0.00')}</p>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered raised>
                <Card.Content>
                  <h2>Members</h2>
                  {members.map(m => (
                    <div key={m.id}>
                      <h3>
                        <Link to={`/households/clients/${household.id}/members/${m.id}`}>{m.first_name}</Link>
                      </h3>
                    </div>
                  ))}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered raised>
                <Card.Content>
                  <Card.Header>Next Cook Date</Card.Header>
                  <Divider />
                  {household.engagement ? (
                    <div>
                      Date:
                      {format(new Date(household.engagement.date), 'MMMM Do, YYYY')}
                      <Divider />
                      <styleInput>
                        <Select onChange={this.onSelectChange} placeholder="Add a meal" options={mealOptions} />
                        <br />
                        <Form.Button onClick={() => this.handleOnAddMeal(household)}>Add</Form.Button>
                      </styleInput>
                      <Divider />
                      <h3>Meals for this Cook Date</h3>
                      <EngagementMeals mealIds={household.engagement.meal_ids} />
                    </div>
                  ) : (
                    <div>
                      <br />
                      <p>No Upcoming Cook Date</p>
                    </div>
                  )}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Container text>
                <Card raised>
                  <Card.Content>
                    <NewHouseholdMember id={id} />
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column width={9} stretched>
              <Container text>
                <Card fluid raised>
                  <Card.Content>
                    <NewEngagement id={id} />
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} />
          <Grid.Row columns={1} textAlign="center">
            <Grid.Column>
              <Container text>
                <Card centered raised fluid>
                  <Card.Content>
                    <Card.Header>Notes</Card.Header>
                    <NewNote householdId={household.id} />
                    <HouseholdNotes notes={household.notes} />
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    return null;
  }
}

Household.propTypes = {
  createHouseholdMeal: PropTypes.func,
  createEngagementMeal: PropTypes.func,
  meals: PropTypes.array,
  members: PropTypes.array,
  households: PropTypes.array,
  match: PropTypes.object,
};

export default connect(
  (state, ownProps) => {
    const id = +ownProps.match.params.id;
    const members = state.members.filter(m => m.household_id === id);
    return {
      households: state.households,
      meals: state.meals,
      members,
    };
  },
  { createHouseholdMeal, createEngagementMeal }
)(Household);
