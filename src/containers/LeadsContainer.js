import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchHouseholds, convertLead } from '../redux/modules/Households/actions'
import { fetchMeals } from '../redux/modules/Meals/actions'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import LeadCard from '../views/LeadCard'
import LeadDetail from '../views/LeadDetail'

const StyledLeads = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
        <StyledLeads>
          {this.props.leads.map(l => <LeadCard key={l.id} {...l} convert={this.handleConvert} />)}
        </StyledLeads>
        <Route path="/leads/:id" component={LeadDetail}/>
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