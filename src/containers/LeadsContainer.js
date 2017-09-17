import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHouseholds, convertLead } from '../redux/modules/Households/actions'
import { fetchMeals } from '../redux/modules/Meals/actions'
import { Container } from 'semantic-ui-react'
import Lead from '../views/Lead'

class LeadsContainer extends Component {

  componentDidMount() {
    this.props.fetchHouseholds()
    this.props.fetchMeals()
  }

  handleConvert = (id) => {
    this.props.convertLead(id, this.props.history)
  }

  render() {
    return (
      <Container>
       {this.props.leads.map(l => <Lead key={l.id} {...l} convert={this.handleConvert} />)}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const leads = state.households.filter(h => h.client === false)
  return {
    leads
  }
}

export default connect(mapStateToProps, { fetchHouseholds, fetchMeals, convertLead })(LeadsContainer)