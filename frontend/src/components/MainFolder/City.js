import React, { Component } from 'react'
import london from'./CityImages/london.jpg';
import sydney from'./CityImages/sydney.jpeg';
import sanfrancisco from'./CityImages/sanfrancisco.jpeg';
import seattle from'./CityImages/seattle.jpeg';
import './City.css'
import './Main.css'
class City extends Component {

  render () {
    return (
      <div className='cityContainer'>
      <button><img src={london}/><h5>London</h5></button>
      <button><img src={sydney}/><h5>Sydney</h5></button>
      <button><img src={sanfrancisco}/><h5>San Francisco</h5></button>
      <button><img src={seattle}/><h5>Seattle</h5></button>
   
      </div>
    )
  }
}

export default City;
