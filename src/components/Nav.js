import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  // constructor(props) {
  //   super(props)
  // }
  handleLogout = () => this.props.logout()
  render() {
    return (
      <ul>
        <div className="navbar-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/households">Households</Link></li>  
        </div>
        <div className="navbar-right">
          {
            this.props.isAuthenticated ?

            <li><Link to="/" onClick={this.handleLogout}>Log Out</Link></li>

            :
            <div>
              <li><Link to="/signup" className="right">Sign Up</Link></li>
              <li><a href="" className="right">Login</a></li>
            </div>
          }
        </div>
      </ul>
    )
  }
}

export default connect(state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}, null)(Nav)