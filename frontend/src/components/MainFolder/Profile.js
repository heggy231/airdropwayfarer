import React,{Component} from 'react';
import avator from './avator.png'
import './Main.css';
var moment = require ("moment");

class Profile extends Component{

    

//on click run  delete function.


//on click 



    render(){

        return(
            <div  className="profileContainer">
           <img className="profileAvator"  src={avator} alt="here's my"/>
             <h6> {localStorage.email}</h6>
             <h6> San Francisco </h6>
             <h6> Join Date: {moment().subtract(1, "day").add(1, "day").format("MMM Do YY")}</h6>
             <button>Edit Profile</button>

            </div>
        );
    }
}

export default Profile;


// moment().format("MMM Do YY")
// moment().subtract(1, "day").format("MMM Do YY")
// moment().subtract(1, "day").add(1, "day").format("MMM Do YY")