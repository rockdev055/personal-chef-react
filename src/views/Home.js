import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import Background from '../images/pexels-photo-349609.jpeg'
import { Container, Button } from 'semantic-ui-react'

const Home = props => {
  return (
    <Container textAlign="center">
      <div {...rules}>
        {props.authenticated
          ? <h1>
              {props.clients} clients
            </h1>
          : <div {...hero}>
              <h1 {...h1}>Personal Chef</h1>
              <p {...heroSub}>
                Keep track of your clients, meals, and schedule all in one
                place.
              </p>
              <Button size="large" color="green">
                Free Sign Up
              </Button>
            </div>}
      </div>
    </Container>
  )
}

export default connect(state => {
  const clients =
    state.households.length > 0
      ? state.households.filter(h => h.client === true).length
      : 0
  return {
    authenticated: state.auth.isAuthenticated,
    clients,
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
  display: 'flex',
  justifyContent: 'center',
  color: '#ecf0f1',
  textShadow: '1px 1px #777',
})

let h1 = css({
  fontSize: '70px',
})

let heroSub = css({
  fontSize: '20px',
})

let hero = css({
  marginTop: '50px',
})
