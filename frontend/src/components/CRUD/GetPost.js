import React, {Component} from 'react';
import axios from 'axios'
class GetPost  extends Component {
    state={
        city1:[],
        userid: ""
    }
    // componentDidMount(){
    //     axios.get(`http://localhost:3001/api/cityposts`)
    //     .then(res=>{
    //         console.log(res)
    //     })
    // }


    //OnClick for My own post
    // onClick = (e) => {
    //     console.log('It worksss')
    //         e.preventDefault()
    //         axios.get(`http://localhost:3001/api/cityposts`)
    //         .then(res =>{
    //             console.log(res.data)
    //             let postdata = res.data
    //             //if user id is equal to current
    //             if (postdata.length > 0){
    //                 let userId = localStorage.userId.toString()
    //                 var usersposts = postdata.filter(function (post) {
    //                     return post.user === userId ; //need to retrieve by userid
    //                   });
                      
    //             }
    //             this.setState({
    //                 city1:usersposts

    //             });
    //             console.log(usersposts)
    //         })
    //         .catch(
    //             error =>{
    //                 console.log('Error:', error);
    //             }
    //         );

    //         //We shoul try to map the
        
    // }
    render () {
        return (
            <button onClick={this.props.onMyClick}>My Posts</button>
        )
    }
}
  
export default GetPost