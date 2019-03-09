// import React, { Component } from 'react'
// // import axios from 'axios'


// //The Post is a child of PostList

// import CitiesList from '../MainFolder/CitiesList'
// import Post from'../PostDisplay/Post'

// class PostList extends Component {
// //   // constructor (props) {
// //   //   super(props)

// //   //   this.state = {
// //   //     cityposts: []
// //   //   }
// //   // }

// //           state = {
// //             cityposts:[]
// //           }


// //   componentDidMount = async () => {
// //     axios.get('http://localhost:3001/api/cityposts')
// //             .then(response => {

// //               // console.log(response.data)
// //               let postentry = response.data
// //               this.setState({
// //                 cityposts:postentry
// //                 // cityposts:postentry
// //               });
// //               console.log("-----We Are Here-----")
// //               console.log(this.state.cityposts)
// //             })

// //             .catch( //<--this part of the axios is dealing with the error object.
// //               error => {
// //                   console.log('Error fetching and parsing data', error);
// //               }
// //           );
// //   }

// //   render () {
// //     const allpost = this.state.cityposts
// //     console.log("//////////////////////")
// //     console.log(allpost)


// //     // if (allpost.length === 0) {
// //     //   console.log("this is empty");
// //     //   return(

        
// //     //     <div>

// //     //     </div>

// //     //   );
// //     // } 
// //     // else { allpost.map(posting)
// //     //   return ( 
// //     //     <div>
// //     //       <h1>{allpost[0].city}</h1>
// //     //       <img src={allpost[0].imageUrl} alt={allpost[0].city}/>
// //     //       <p>{allpost[0].title}</p>
// //     //       <p>{allpost[0].description}</p>
// //     //   </div>
// //     //   )
// //     // }

    
// //     var showCityPosts = allpost.map((allpost, i) => {
// //       return ( 
// //         <div key={i}>
// //           <Post info={allpost} isLoggedIn={this.props.isLoggedIn} />
         
// //         </div>
// //       )
// //     })
// //     return (
// //       <div>
// //         {showCityPosts}
// //       </div>
// //     )
// //   }
// // }

// render(){
//   return (
//           <div>
//          This is the
//           </div>
//         )
// }

// export default PostList;
