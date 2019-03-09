import React, { Component } from 'react'
import './Post.css'
import '../MainFolder/Main.css'

class Post extends Component {
  
    state = {
      cityposts: this.props.info
    }
  

  render () {
    return (
      <div >
        
            <div >
              <h1>{this.state.cityposts.city}</h1>
              <img src={this.state.cityposts.imageUrl} alt={this.state.cityposts.city} className='post-image' />
              <h3>Title: {this.state.cityposts.title}</h3>
              {this.props.isLoggedIn ? <h4>Description: {this.state.cityposts.description}</h4> : ''}
            </div>

      </div>
    )
  }
}

export default Post;
