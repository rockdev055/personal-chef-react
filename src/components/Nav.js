import React from 'react'
import {
  Link
} from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <div className="navbar-left">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/households">Households</Link></li>  
      </div>
      <div className="navbar-right">
        <li><a href="" className="right">Sign Up</a></li>
        <li><a href="" className="right">Login</a></li>
      </div>
    </ul>
  )
}

export default Nav