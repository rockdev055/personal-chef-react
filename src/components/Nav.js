import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { css } from 'glamor'

class Nav extends Component {
  state = {}
  handleLogout = () => this.props.logout()
  handleClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary {...rules}>
        <Menu.Item
          name='home'
          as={Link}
          to="/"
          active={activeItem === 'home'}
          onClick={this.handleClick}>
        Home  
        </Menu.Item>
        
        {
          this.props.isAuthenticated ? 
        
            <Menu.Menu position="right">
              <Menu.Item
                name='households'
                as={Link}
                to="/households"
                active={activeItem === 'households'}
                onClick={this.handleClick}>
                Households
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/"
                onClick={this.handleLogout}>
                Logout
              </Menu.Item>

            </Menu.Menu>

            :

            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/login">
                Login
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/signup">
                Sign Up
              </Menu.Item>
            </Menu.Menu>

          }
      </Menu>
    )
  }
}

export default connect(state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}, null)(Nav)

let rules = css({
  height: '60px'
})
