import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import Background from '../images/pexels-photo-349609.jpeg'
import { Container } from 'semantic-ui-react'

const Home = props => {
  return (
    <div>
      <div {...rules} />
      <Container>
        {props.authenticated
          ? <h1>
              {props.clients} clients
            </h1>
          : <h1>Home</h1>}
      </Container>
    </div>
  )
}

export default connect(state => {
  const clients = state.households.filter(h => h.client === true).length
  return {
    authenticated: state.auth.isAuthenticated,
    clients
  }
})(Home)

let rules = css({
  width: '100%',
  height: 'auto',
  position: 'fixed',
  top: 55,
  left: 0,
  minHeight: '100%',
  minWidth: '1024px',
  background: `url(${Background}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  opacity: '0.5'
})
