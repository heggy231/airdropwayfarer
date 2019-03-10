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
      <button className={this.props.test.city0} onClick ={this.props.onAllClick} >{this.props.test.city0}</button>

      
      <button className={this.props.test.city1} onClick ={this.props.onClick} >{this.props.test.city1}</button>
      <button className={this.props.test.city2} onClick ={this.props.onClick} >{this.props.test.city2}</button>

      <button className={this.props.test.city3} onClick ={this.props.onClick} >{this.props.test.city3}</button>
      <button className={this.props.test.city4} onClick ={this.props.onClick} >{this.props.test.city4}</button>
   
      </div>
    )
  }
}

export default City;


// <img src={london}/>
// <img src={sydney}/>
// <img src={sanfrancisco}/>
// <img src={seattle}/>