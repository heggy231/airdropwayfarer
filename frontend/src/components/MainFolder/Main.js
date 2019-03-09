import React,{Component} from 'react';
import SearchContainer from './SearchContainer';
import Profile from './Profile';
import CitiesList from './CitiesList';
import PostList from '../PostList/PostList';
import axios from 'axios'
import Post from '../PostDisplay/Post'
import City from './City';
import './Main.css'

class Main extends Component{
    
    state = {
      cityposts: []
    }



    

  componentDidMount = async () => {
    axios.get('http://localhost:3001/api/cityposts')
      .then(response => {
        // console.log(response.data)
        let postentry = response.data
        this.setState({
          cityposts:postentry
          // cityposts:postentry
        });
        Date.prototype.toDateInputValue = (function() {
          var local = new Date(this);
          local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
          return local.toJSON().slice(0,10);
      });
        console.log("-----We Are Here-----")
        console.log(this.state.cityposts)
      })

      .catch( //<--this part of the axios is dealing with the error object.
        error => {
            console.log('Error fetching and parsing data', error);
        }
    );
  }

  render () {
    const allpost = this.state.cityposts
    console.log("//////////////////////")
    console.log(allpost)


    var showCityPosts = allpost.map((allpost, i) => {
      return ( 
        <div >
          

        <section key={i} className ="col-1">
          <Post info={allpost} isLoggedIn={this.props.isLoggedIn} />
        </section>
        </div>
      )
    })
      return (

        <section className="container">
        
              <div className="ppp-1">

                  <div className="profileContainer">
                    <Profile />
                  </div>

                  <div className='cityContainer'>
                    <City/>
                  </div>
              
                    
              </div>


              <div className="col-2">

                  <div className="searchContainer">
                    <SearchContainer />
                  </div>

                  <div className="postContainer">
                    {showCityPosts}
                  </div>

              </div>
          
        </section>
      )
    }
}

export default Main;