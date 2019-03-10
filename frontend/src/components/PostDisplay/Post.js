import React, { Component } from 'react'
// import './Post.css'
import '../MainFolder/Main.css'

class Post extends Component {
  
    state = {
      cityposts: this.props.info
    }
  

  render () {
    return (
     
        
            <div  className="postTemplate">
             

             <div  className="postDetails">
              <img src={this.state.cityposts.imageUrl} style={{marginTop: 20}}alt={this.state.cityposts.city} className='post-image' />
              
            
              <div  className="postDescription"> 
                  <h2>{this.state.cityposts.city}</h2>
                  <h4>Title: {this.state.cityposts.title}</h4>
                  {this.props.isLoggedIn} <h5>"{this.state.cityposts.description}"</h5 >
              </div>

             </div>



              <div  className="flex-btns">
              <button><i class="fa fa-trash" aria-hidden="true"></i></button>
              <button><i class="fas fa-pen-square" ></i></button>

            </div>

      </div>
    )
  }
}

export default Post;
