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
      test :{
        city0: "All Posts",
        city1: "London",
        city2: "Sydney",
        city3: "San Francisco",
        city4: "Seattle",
        user: localStorage.userId
      },
      cityposts: [],
      postbyCityName:[],
      postbyUser:[]
    }

//  //----------------GEt Method (City Post) --------------------------   
// //GEt Method to to obtain all of the posts--------------
  onAllClick= (e) => {
    e.preventDefault()
    axios.get('http://localhost:3001/api/cityposts')
      .then(response => {
        // console.log(response.data)
        let postentry = response.data
        this.setState({
          cityposts:postentry
          // cityposts:postentry
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

//--------------------By User-----------------
onMyClick = (e) =>{
  e.preventDefault()
  const name = `${e.target.innerHTML}`
  console.log(name)
  if (`${e.target.innerHTML}` === `${e.target.innerHTML}`){
    console.log(` We Lit in ${e.target.innerHTML}`)
    var cityname = localStorage.userId
    console.log("-------")
    console.log(`${cityname}`)
    axios.get(`http://localhost:3001/api/cityposts`)
    .then(res =>{
        // console.log(res.data)
        let postdata = res.data          
        //if user id is equal to current
        if (postdata.length > 0 ){
          console.log(`${cityname}`)
            // let userId = localStorage.userId.toString()
            // let selectedcity = this.state.test.city1
            var individualcity = postdata.filter(function (post) {
              //i need an if else statement to handle the userid
                return post.user === `${cityname}`; //need to retrieve by userid
              });
              
        }
        else{
          
        }
        this.setState({
          cityposts:individualcity

        });
        console.log(`-------${cityname} post-------`)
        console.log(this.state.cityposts)
    })
    .catch(
        error =>{
            console.log('Error:', error);
        }
    );

  }
  else {
    console.log("We got work to do")
  }

}

//---------------------Working Get City------------------------------
//I neeed a switch statement
  
onClick = (e) =>{
  e.preventDefault()
  const name = `${e.target.innerHTML}`
  console.log(name)
  if (`${e.target.innerHTML}` === `${e.target.innerHTML}`){
    console.log(` We Lit in ${e.target.innerHTML}`)
    var cityname = `${e.target.innerHTML}`
    console.log("-------")
    console.log(`${cityname}`)
    axios.get(`http://localhost:3001/api/cityposts`)
    .then(res =>{
        // console.log(res.data)
        let postdata = res.data          
        //if user id is equal to current
        if (postdata.length > 0 ){
          console.log(`${cityname}`)
            // let userId = localStorage.userId.toString()
            // let selectedcity = this.state.test.city1
            var individualcity = postdata.filter(function (post) {
              //i need an if else statement to handle the userid
                return post.city === `${cityname}`; //need to retrieve by userid
              });
              
        }
        else{
          
        }
        this.setState({
          cityposts:individualcity

        });
        console.log(`-------${cityname} post-------`)
        console.log(this.state.cityposts)
    })
    .catch(
        error =>{
            console.log('Error:', error);
        }
    );
  }
  else {
    console.log("We got work to do")
  }
}

//---------------------Working Get City------------------------------


//--------------Get Request for individual City---------------
//--------------Connected to different City Buttons
//This brings back Specific City Post
// onClick = (e) => {
//       e.preventDefault()
//       const name = `${e.target.innerHTML}`
//       console.log('This is London')
//       console.log(name)
//       axios.get(`http://localhost:3001/api/cityposts`)
//       .then(res =>{
//           // console.log(res.data)
//           let postdata = res.data          
//           //if user id is equal to current
//           if (postdata.length > 0 ){
//               // let userId = localStorage.userId.toString()
//               // let selectedcity = this.state.test.city1
//               var individualcity = postdata.filter(function (post) {
//                   return post.city === "London"; //need to retrieve by userid
//                 });
                
//           }
//           else{
            
//           }
//           this.setState({
//             cityposts:individualcity

//           });
//           console.log('--------London post-------')
//           console.log(this.state.cityposts)
//       })
//       .catch(
//           error =>{
//               console.log('Error:', error);
//           }
//       );

//       //We shoul try to map the
  
// }





// //--------------Get Request for individual User---------------
// //--------------Connected to Mine Button -------
// //This brings back Specific Users Post
//     onClick = (e) => {
//       console.log('It worksss')
//           e.preventDefault()
//           axios.get(`http://localhost:3001/api/cityposts`)
//           .then(res =>{
//               console.log(res.data)
//               let postdata = res.data
//               //if user id is equal to current
//               if (postdata.length > 0){
//                   let userId = localStorage.userId.toString()
//                   var usersposts = postdata.filter(function (post) {
//                       return post.user === userId ; //need to retrieve by userid
//                     });
                    
//               }
//               this.setState({
//                 postbyUser:usersposts

//               });
//               console.log('--------Userpost-------')
//               console.log(this.state.postbyUser)
//           })
//           .catch(
//               error =>{
//                   console.log('Error:', error);
//               }
//           );

//           //We shoul try to map the
      
//   }





  render () {

  




    

//I think I need a 


    const allpost = this.state.cityposts
    console.log("//////////////////////")
    console.log(allpost)


    var showCityPosts = allpost.map((allpost, i) => {
      return ( 
        <div >
        <section key={i} className ="col-1">
          <Post info={allpost} isLoggedIn={this.props.isLoggedIn}/> 
        </section>
        </div>

      )
    })
//consi




    ///--------------------The Main container's return---------------
      return (

        <section className="container">
      
                    <CitiesList onAllClick={this.onAllClick} onClick ={this.onClick} test={this.state.test}/>

              <div className="col-2">


              <div className="searchContainer">
                    <SearchContainer  onMyClick ={this.onMyClick} />
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


















{/* <div className="ppp-1">

                  <div className="profileContainer">
                    <Profile />
                  </div>

                  <div className='cityContainer'>
                    <City/>
                  </div>
              
                    
              </div> */}