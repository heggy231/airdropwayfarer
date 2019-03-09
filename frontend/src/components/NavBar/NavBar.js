import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = [<NavItem key={5}>user name</NavItem>]
    if (this.props.isLoggedIn) {
      //  navBarItems.push(<NavItem key={1} href='/postList'>All Post</NavItem>)
       navBarItems.push(<NavItem key={6} href='/main'>Main</NavItem>)
       navBarItems.push(<NavItem key={2} href='/logout' onClick={this.props.handleLogOut}>Log Out</NavItem>)
     
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='WayFarer' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
