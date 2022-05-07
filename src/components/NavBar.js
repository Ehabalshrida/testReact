import React, { Component } from 'react'
import{NavLink ,Link}from "react-router-dom"
 class NavBar extends Component {
  render() {
    return (
      <div>
<Link to="/">Dom1</Link>
<Link to="/f">Dom2</Link>
<Link to="/h">DomH</Link>
<Link to="/l">List</Link>


     </div>
    )
  }
}
export default NavBar
