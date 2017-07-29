import React from 'react'

const Nav = () => {
  return (
    <ul>
      <div className="navbar-left">
        <li><a href="">Home</a></li>
        <li><a href="">Households</a></li>
      </div>
      <div className="navbar-right">
        <li><a href="" className="right">Sign Up</a></li>
        <li><a href="" className="right">Login</a></li>
      </div>
    </ul>
  )
}

export default Nav