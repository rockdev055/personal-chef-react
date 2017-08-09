import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}
  handleLogout = () => this.props.logout()
  handleClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return (
      <Menu>
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
            <Menu.Item
              name='households'
              as={Link}
              to="/households"
              active={activeItem === 'households'}
              onClick={this.handleClick}>
              Households  
            </Menu.Item>
          :
            null
        }
        {
          this.props.isAuthenticated ? 
        
            <Menu.Menu position="right">

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
      // <ul>
      //   <div className="navbar-left">
      //     <li><Link to="/">Home</Link></li>
      //     {
      //       this.props.isAuthenticated ?

      //       <li><Link to="/households">Households</Link></li>
            
      //       :

      //       null
      //     }
      //   </div>
      //   <div className="navbar-right">
      //     {
      //       this.props.isAuthenticated ?

      //       <li><Link to="/" onClick={this.handleLogout}>Log Out</Link></li>

      //       :
      //       <div>
      //         <li><Link to="/signup" className="right">Sign Up</Link></li>
      //         <li><Link to="/login" className="right">Login</Link></li>
      //       </div>
      //     }
      //   </div>
      // </ul>