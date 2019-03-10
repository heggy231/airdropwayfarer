import React, { Component } from 'react'
import City from './City';
import axios from 'axios';
import Profile from './Profile';
import './Main.css'



class CitiesList extends Component {

  render () {
    return (
        <div className="ppp-1">

        <div className="profileContainer">
          <Profile />
        </div>

        <div className='cityContainer'>
          <City thebutton={this.props.thebutton}   onAllClick={this.props.onAllClick} onClick ={this.props.onClick} test={this.props.test}/>
        </div>
    
          
    </div>
    )
  }
}

export default CitiesList;
