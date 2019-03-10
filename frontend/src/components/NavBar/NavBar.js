import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import { Navbar, NavItem } from 'react-materialize'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'

import './NavBar.css'


class NavBar extends Component {
  render () {
    let navBarItems = [<NavItem key={5}>{localStorage.email}</NavItem>]
    if (this.props.isLoggedIn) {
      //  navBarItems.push(<NavItem key={1} href='/postList'>All Post</NavItem>)
       navBarItems.push(<NavItem key={6} href='/main'>Main</NavItem>)
       navBarItems.push(<NavItem key={2} href='/logout' onClick={this.props.handleLogOut}>Log Out</NavItem>)
     
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='AirDrop Farer' className='nav' right>
        {navBarItems}

        {/* <Switch>
          <Route path='/signup'
                        render={(props) => {
                          return (
                            <SignUpForm isLoggedIn={this.props.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                          )
                        }}
                      />

                      <Route path='/login'
                        render={(props) => {
                          return (
                            <LogInForm isLoggedIn={this.props.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                          )
                        }}
                      />



        </Switch>
         */}



            

      </Navbar>
    )
  }
}

export default NavBar
