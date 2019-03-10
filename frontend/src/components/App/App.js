import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'


import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import Landing from '../LandingPage/Landing'
import PostList from '../PostList/PostList'
import Main from '../MainFolder/Main'
import CreatePost from '../CRUD/CreatePost'
import AppPost from '../CRUD/AddPost'

import './App.css'
import AddPost from '../CRUD/AddPost';

class App extends Component {
    state = {
      email: '',
      password: '',
      isLoggedIn: false,
      user: null,
      postbyCityName:[]
    }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        
        isLoggedIn: true,
        user: localStorage.userId,
        email:localStorage.email
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }
  

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //----------------Signup Method----------------
  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', 
			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
        localStorage.email = response.data.user.email
        localStorage.userId = response.data.user._id
        
        this.setState({
            isLoggedIn: true,
            user: response.data.user

          })

      })
      .catch(err => console.log(err))
  }




//----------------Login Method----------------
  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', { //<-- save token to local storage
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      debugger;
      localStorage.token = response.data.signedJwt
      console.log(response)
      // localStorage.email = response.data.email
      this.setState({
        email: this.state.email,
        isLoggedIn: true,
        user: response.data.user
      })
    })
    .catch(err => console.log(err))
  }

//----------------Login Method----------------
// storeUser = (e)=>{
//   this.setState({
//     email: this.state.email,
//     isLoggedIn: true,
//     user: response.data.user

// },

// keepUserInfo = (e) => {
//   e.preventDefault()
//   this.setState({
//     email: this.state.email,
//     isLoggedIn: true,
//     user: response.data.user
//   })
// }

// //--------------Get Request for individual City---------------
// //--------------Connected to different City Buttons
// //This brings back Specific City Post
// onClick = (e) => {
//   console.log('This is London')
//       e.preventDefault()
//       axios.get(`http://localhost:3001/api/cityposts`)
//       .then(res =>{
//           console.log(res.data)
//           let postdata = res.data
//           //if user id is equal to current
//           if (postdata.length > 0){
//               // let userId = localStorage.userId.toString()
//               // let selectedcity = this.state.test.city1
//               var individualcity = postdata.filter(function (post) {
//                   return post.city === "London"; //need to retrieve by userid
//                 });
                
//           }
//           this.setState({
//             postbyCityName:individualcity

//           });
//           console.log('--------London post-------')
//           console.log(this.state.postbyCityName)
//       })
//       .catch(
//           error =>{
//               console.log('Error:', error);
//           }
//       );

//       //We shoul try to map the
  
// }






//--------------Get Request for individual User---------------
//--------------Connected to Mine Button -------
//This brings back Specific Users Post
    onClick = (e) => {
      console.log('It worksss')
          e.preventDefault()
          axios.get(`http://localhost:3001/api/cityposts`)
          .then(res =>{
              console.log(res.data)
              let postdata = res.data
              //if user id is equal to current
              if (postdata.length > 0){
                  let userId = localStorage.userId.toString()
                  var usersposts = postdata.filter(function (post) {
                      return post.user === userId ; //need to retrieve by userid
                    });
                    
              }
              this.setState({
                postbyUser:usersposts

              });
              console.log('--------Userpost-------')
              console.log(this.state.postbyUser)
          })
          .catch(
              error =>{
                  console.log('Error:', error);
              }
          );

          //We shoul try to map the
      
  }
  


// ------------------In Render Method---------------------
  render () {
    



















//// ------------------In Return ---------------------
    return (
      //---------------First Chilsd
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
        <div className='body'>




{/* ---------------------Second Child----------------------------- */}

          <Switch>


            
            <Route
              path='/postList'
              render={() => {
                return (
                  <PostList isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />




{/* ------------------Landing Page---------------------- */}
            <Route
              exact path='/'
              render={() => {
                return (
                  <Landing  />
                )
              }}
            />
{/* ------------------Main Page---------------------- */}




            <Route
              path='/main'
              render={() => {
                return (
                  <Main onClick ={this.onClick} keepUserInfo={this.state.keepUserInfo} />
                )
              }}
            />

{/* ------------------Create Post---------------------- */}
            <Route
              path='/createpost'
              render={() => {
                return (
                  <CreatePost  />
                )
              }}
            />

{/* ------------------Edit Post---------------------- */}
            <Route
              exact path='/addpost'
              render={() => {
                return (
                  <AddPost  />
                )
              }}
            />

            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />

            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />

          </Switch>
        </div>
      </div>
    )
  }
}

export default App
