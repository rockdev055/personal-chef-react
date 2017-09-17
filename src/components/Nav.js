import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { css } from 'glamor'

class Nav extends Component {
  handleLogout = () => this.props.logout()
  
  render() {
    return (
      <Menu secondary {...rules}>
        <Menu.Item
          name='home'
          as={Link}
          to="/"
        >
        Home  
        </Menu.Item>
        
        {
          this.props.isAuthenticated ? 
        
            <Menu.Menu position="right">
              <Menu.Item
                name='households'
                as={Link}
                to="/households"
              >
                Clients
              </Menu.Item>

              <Menu.Item
                name='leads'
                as={Link}
                to="/leads"
              >
                Leads
              </Menu.Item>

              <Menu.Item
                name='meals'
                as={Link}
                to="/meals"
              >
                Meals
              </Menu.Item>
              
              <Menu.Item
                as={Link}
                to="/households/new"
              >
                New Lead
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/meals/new">
                New Meal
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
