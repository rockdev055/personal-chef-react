import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

class HouseholdSidebar extends Component {

  render() {
    return (
      <div>
        {this.props.households.map(h => <Link {...rule} key={h.id} to={`${this.props.url}/${h.id}`}>{h.name}</Link>)}
      </div>
    )
  }
}

let rule = css({
  display: 'block',
  padding: '.4em 0',
  transition: 'all 0.5s ease',
  color: 'black',
  ':hover': {
    padding: '.4em 1em',
    color: 'white',
    background: 'hsl(0, 0%, 20%)'

  }
})

export default HouseholdSidebar
