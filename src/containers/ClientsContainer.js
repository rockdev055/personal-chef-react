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
    console.log(this.props)
    const clients = this.props.clients.map(c => <ClientCard key={c.id} {...c} />)
    return (
      <Container>
        <StyledLeads>
          {clients}
        </StyledLeads>
      </Container>
    )
  }
}

export default ClientsContainer