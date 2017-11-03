import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertLead } from '../redux/modules/Households/actions'
import numeral from 'numeral'
import HouseholdNotes from '../components/HouseholdNotes'
import NewNote from '../components/NewNote'
import { Grid, Card, Header, Button, Input } from 'semantic-ui-react'

class LeadDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      converting: false,
      rate: 0
    }
  }

  submit = e => {
    e.preventDefault()
    const newRate = { monthly_rate: this.state.rate }

    this.props.convertLead(this.props.lead.id, newRate, this.props.history)
  }

  cancel = () => {
    this.setState({
      converting: false
    })
  }

  handleConvert = () => {
    this.setState({
      converting: true
    })
  }

  handleRateChange = e => {
    this.setState({
      rate: e.target.value
    })
  }

  render() {
    if (this.props.lead) {
      return (
        <Grid>
          <Grid.Row textAlign="center" columns={1}>
            <Card centered raised>
              <Card.Content>
                <Header as="h1">
                  {this.props.lead.name}
                </Header>

                <Header as="h3">
                  Potential Monthly: ({numeral(
                    this.props.lead.monthly_rate
                  ).format('$0,0.00')})
                </Header>
              </Card.Content>
            </Card>
          </Grid.Row>
          <Grid.Row textAlign="center" columns={1}>
            <Grid.Column width={7} textAlign="centered">
              <Card centered raised fluid>
                <Card.Content>
                  {!this.state.converting
                    ? <Button primary onClick={this.handleConvert}>
                        Convert Client
                      </Button>
                    : null}
                  {this.state.converting
                    ? <div>
                        <form onSubmit={this.submit}>
                          <h3>Monthly Rate</h3>
                          <Input
                            onChange={this.handleRateChange}
                            type="text"
                            required
                          />
                          <br />
                          <Button positive>Convert</Button>
                        </form>
                        <Button color="red" onClick={this.cancel}>
                          Cancel
                        </Button>
                      </div>
                    : null}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10} textAlign="centered">
              <Card centered raised fluid>
                <Card.Content>
                  <NewNote householdId={this.props.lead.id} />
                  <HouseholdNotes notes={this.props.lead.notes} />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return null
    }
  }
}

export default connect(
  (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id, 10)
    const lead = state.households.find(h => h.id === id)
    return {
      lead
    }
  },
  { convertLead }
)(LeadDetail)
