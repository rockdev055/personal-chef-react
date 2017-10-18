import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import { createHouseholdMeal } from '../redux/modules/HouseholdMeals/actions'
import NewHouseholdMember from '../components/NewHouseholdMember'
import { Card, Grid, List } from 'semantic-ui-react'

class Household extends Component {

  handleOnChange = (id) => {
    const householdId = parseInt(this.props.match.params.id, 10)
    this.props.createHouseholdMeal(id, householdId)
  }

  render() {
    const { households, meals, members } = this.props
    const id = parseInt(this.props.match.params.id, 10)
    const household = households.find(h => h.id === id)

    if (household) {

      const mealsNotAssociated = meals.filter(m => !household.meal_ids.includes(m.id))
      const mealsAssociated = meals.filter(m => household.meal_ids.includes(m.id))
      return (
        <div>
          <Grid divided='vertically'>
            <Grid.Row textAlign='center' columns={2}>
              <Grid.Column textAlign='center'>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <h3>{household.name} Family</h3>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <p>{household.address}</p>
                    <p>{numeral(household.monthly_rate).format('$0,0.00')}</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      Meals Not Made
                    </Card.Header>
                    <List>
                      {mealsNotAssociated.map(m => (<List.Item key={m.id}><input onChange={() => this.handleOnChange(m.id)} type="checkbox" value={m.id} /><span>{m.name}</span></List.Item>))}
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div>
            <NewHouseholdMember />
            <h2>Members</h2>
            {members.map(m => {
              return (
                <div key={m.id}>
                  <h3>{m.first_name}</h3>
                </div>
              )
            })}
          </div>
          <div>
            <h2>Meals</h2>
            {mealsAssociated.map(m => <p key={m.id}>{m.name}</p>)}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default connect((state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10)
  const members = state.members.filter(m => m.household_id === id)
  return {
    households: state.households,
    meals: state.meals,
    members
  }
}, { createHouseholdMeal })(Household)