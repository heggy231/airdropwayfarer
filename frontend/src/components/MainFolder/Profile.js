import React,{Component} from 'react';
import avator from './avator.png'
import './Main.css';

class Profile extends Component{
    render(){
        return(
            <div  className="profileContainer">
           <img className="profileAvator"  src={avator} alt="here's my"/>
             <h6> Name Last Name</h6>
             <h6> Current City </h6>
             <h6> Join Date</h6>
             <button>Edit Profile</button>

            </div>
        );
    }
}

export default Profile;