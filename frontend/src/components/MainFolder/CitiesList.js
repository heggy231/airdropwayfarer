// import React, { Component } from 'react'
// import City from './City';
// import axios from 'axios'



// class CitiesList extends Component {

//           state = {
//             cityposts:[]
//           }


//   componentDidMount = async () => {
//     axios.get('http://localhost:3001/api/cityposts')
//             .then(response => {

//               // console.log(response.data)
//               let postentry = response.data
//               this.setState({
//                 cityposts:postentry
//                 // cityposts:postentry
//               });
//               console.log("-----We Are Here-----")
//               console.log(this.state.cityposts)
//             })

//             .catch( //<--this part of the axios is dealing with the error object.
//               error => {
//                   console.log('Error fetching and parsing data', error);
//               }
//           );
//   }

//   render () {
//     const allpost = this.state.cityposts
//     console.log("//////////////////////")
//     console.log(allpost)


//     // if (allpost.length === 0) {
//     //   console.log("this is empty");
//     //   return(

        
//     //     <div>

//     //     </div>

//     //   );
//     // } 
//     // else { allpost.map(posting)
//     //   return ( 
//     //     <div>
//     //       <h1>{allpost[0].city}</h1>
//     //       <img src={allpost[0].imageUrl} alt={allpost[0].city}/>
//     //       <p>{allpost[0].title}</p>
//     //       <p>{allpost[0].description}</p>
//     //   </div>
//     //   )
//     // }

    
//     var showCityPosts = allpost.map((allpost, i) => {
//       return ( 
//         <div key={i}>
//           <City info={allpost} isLoggedIn={this.props.isLoggedIn} />
         
//         </div>
//       )
//     })
//     return (
//       <div>
//         {showCityPosts}
//       </div>
//     )
//   }
// }

// export default CitiesList;
