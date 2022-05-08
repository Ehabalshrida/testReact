import React, { Component } from 'react';
import{Link}from "react-router-dom"
import '../style.css'
class NavBar1 extends Component {
    render() {
        return (
            <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/ac">account</Link>

            </div>
        );
    }
}

export default NavBar1;