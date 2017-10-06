import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientCard from '../views/ClientCard'

class ClientsContainer extends Component {
  render() {
    const clients = this.props.clients.map(c => <ClientCard {...c} />)
    return (
      <div>
        {clients}
      </div >
    )
  }
}

export default connect(state => {
  const clients = state.households.filter(h => h.client == true)
  return {
    clients
  }
})(ClientsContainer)