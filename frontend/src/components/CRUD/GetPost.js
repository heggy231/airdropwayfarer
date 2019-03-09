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
                    city1:usersposts

                });
                console.log(usersposts)
            })
            .catch(
                error =>{
                    console.log('Error:', error);
                }
            );
        // console.log(`Form submitted:`)
        // console.log(`Post City: ${this.state.city}`)
        // console.log(`Post Title: ${this.state.title}`)
        // console.log(`Post Description: ${this.state.description}`)
        // console.log(`Post Url: ${this.state.imageUrl}`)
    
        // 
        // axios.get(`http://localhost:3001/api/cityposts?city=London`)
        // .then(res=>{
        //     this.setState({
        //         activepost:res.data
        //     });
        // }
        
    }
    render () {
        return (
            <button onClick={this.onClick}>Mine</button>
        )
    }
}
  
export default GetPost