import React from 'react'
import { css } from 'glamor'
import Background from '../images/pexels-photo-349609.jpeg'
import { Container } from 'semantic-ui-react'

export default () => (
  <div>
    <div {...rules}>
    </div>
    <Container>
      <h1>Home</h1>
    </Container>

  </div>
)

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

