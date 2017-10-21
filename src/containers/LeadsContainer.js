import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHouseholds, convertLead } from '../redux/modules/Households/actions'
import { fetchMeals } from '../redux/modules/Meals/actions'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import LeadCard from '../views/LeadCard'


const StyledLeads = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class LeadsContainer extends Component {

  handleConvert = (id) => {
    this.props.convertLead(id, this.props.history)
  }

  render() {
    return this.props.leads.length == 0 ?

      (
        <h1>Currently No Leads</h1>
      )

      :

      (
        <Container>
          <StyledLeads>
            {this.props.leads.map(l => <LeadCard key={l.id} {...l} convert={this.handleConvert} />)}
          </StyledLeads>
        </Container>
      )
  }
}

export default connect(null, { fetchHouseholds, fetchMeals, convertLead })(LeadsContainer)