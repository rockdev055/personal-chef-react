import React, { Component } from 'react'
import ClientCard from '../views/ClientCard'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLeads = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class ClientsContainer extends Component {
  render() {
    const clients = this.props.clients.map(c => <ClientCard key={c.id} {...c} />)
    const monthly = this.props.clients.reduce((a, b) => a + b.monthly_rate, 0)
    return (
      <Container>
        {monthly}
        <StyledLeads>
          {clients}
        </StyledLeads>
      </Container>
    )
  }
}

export default ClientsContainer
