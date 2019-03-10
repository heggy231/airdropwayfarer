// import React, {Component} from 'react';
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import axios from 'axios'

// class CreatePost extends Component {
//   constructor(props){
//     super(props);
//     //Making sure all of our methods below are bound to the THIS object.
//     //otherwise we unable to access the STATE object.
//     this.onChangeCreatePostCity = this.onChangeCreatePostCity.bind(this)
//     this.onChangeCreatePostTitle = this.onChangeCreatePostTitle.bind(this)
//     this.onChangeCreatePostDescription = this.onChangeCreatePostDescription.bind(this)
//     this.onChangeCreatePostImageUrl = this.onChangeCreatePostImageUrl.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)

//     this.state ={
//         city: "",
//         title: "",
//         description: "",
//         imageUrl: "",
//         completed: false
//     } 
//   }






  
//   // The 4 onChange... updates the state to what was changed 


//   onChangeCreatePostCity(e){
//     this.setState({
//       city:e.target.value
//     });
//   }

//   onChangeCreatePostTitle(e){
//     this.setState({
//       title:e.target.value
//     });
//   }  
  
//   onChangeCreatePostDescription(e){
//     this.setState({
//       description:e.target.value
//     });
//   }  
  
//   onChangeCreatePostImageUrl(e){
//     this.setState({
//       imageUrl:e.target.value
//     });
//   }





//   onSubmit = (e) => {
//     // console.log(`Form submitted:`)
//     // console.log(`Post City: ${this.state.city}`)
//     // console.log(`Post Title: ${this.state.title}`)
//     // console.log(`Post Description: ${this.state.description}`)
//     // console.log(`Post Url: ${this.state.imageUrl}`)

//     e.preventDefault()
//     axios({
//       method: 'post',
//       url: 'http://localhost:3001/api/cityposts',
//       data: { 
//         city: this.state.city,
//         title: this.state.title,
//         description: this.state.description,
//         imageUrl:this.state.imageUrl 
//           },
//         headers: {authorization: `Bearer ${localStorage.token}`}
//       })
//       .then( response => {
//         console.log(response)



        
//         // this.setState ({
//         //   city: "",
//         //   title: "",
//         //   description: "",
//         //   imageUrl: "",
//         //   completed: false
    
//         // })
//       })
//       .catch(err => console.log(err))
     
//       // reset all keys in this.setState to empty string as it was initially


//   }





// //   //Now we need the method handling the submitting of the form
// //   onSubmit(e){
// // //The Submitt Logic needs to go below here.







// //     e.preventDefault();
// //     // reset all keys in this.setState to empty string as it was initially
// //     this.setState ({
// //       city: "",
// //       title: "",
// //       description: "",
// //       imageUrl: "",
// //       completed: false

// //     })
// //   }


//     render () {
//       return (
        
//         <div style={{marginTop: 20}}>
//           <h2>Create New Post</h2>
  
//           <form onSubmit={this.onSubmit}>

//               {/* <div className='form-group'>

//                   <div className="form-check form-check">
//                     <input
//                         className="form-check-input"
//                         type="radio"
//                         name="cityOptions"
//                         id='cityLondon'
//                         value='London'
//                         checked={this.state.city==='London'}
//                         onChange={this.onChangeCreatePostCity}
//                         />
//                         <label className="form-check-label">London</label>
//                   </div>

//                   <div className="form-check form-check">
//                     <input
//                         className="form-check-input"
//                         type="radio"
//                         name="cityOption"
//                         id='citySydney'
//                         value='Sydney'
//                         checked={this.state.city==='Sydney'}
//                         onChange={this.onChangeCreatePostCity}
//                         />
//                         <label className="form-check-label">Sydney</label>
//                   </div>
                  
//                   <div className="form-check form-check">
//                     <input
//                         className="form-check-input"
//                         type="radio"
//                         name="cityOptions"
//                         id='citySan Francisco'
//                         value='San Francisco'
//                         checked={this.state.city==='San Francisco'}
//                         onChange={this.onChangeCreatePostCity}
//                         />
//                         <label className="form-check-label">San Francisco</label>
//                   </div>

//                   <div className="form-check form-check">
//                   <input
//                         className="form-check-input"
//                         type="radio"
//                         name="cityOptions"
//                         id='citySeattle'
//                         value='Seattle'
//                         checked={this.state.city==='Seattle'}
//                         onChange={this.onChangeCreatePostCity}
//                         />
//                         <label className="form-check-label">Seattle</label>
//                   </div>

//                 </div> */}

//               <div className='form-group'>
//                         <label>City: </label>
//                         <input
//                         type="text"
//                         className="form-control"
//                         value={this.state.city}
//                         onChange={this.onChangeCreatePostCity}
//                         />
//                         </div>

//                 <div className='form-group'>
//                   <label>Title: </label>
//                   <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.title}
//                   onChange={this.onChangeCreatePostTitle}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <label>Description: </label>
//                   <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.description}
//                   onChange={this.onChangeCreatePostDescription}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <label>Image: </label>
//                   <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.imageUrl}
//                   onChange={this.onChangeCreatePostImageUrl}
//                   />
//                 </div>


//             <div className="form-group">
//               <input type='submit' value='Create Post'  className="btn btn-primary" />
//             </div>
           
//           </form>
//         </div>
//       )
//     }
//   }
  
//   export default CreatePost


//   // Resources I used to CRUD
//   // https://www.youtube.com/watch?v=qvBZevK1HPo