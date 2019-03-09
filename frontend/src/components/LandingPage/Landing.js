import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Landing.css'



class Landing extends Component{
    render(){
        return(
            <div >
                <div id="landing-page-flex">

                         <div className="top-level-wrapper-flex">

                        <div id="top-level">
                            <h1>Wayfarer</h1>
                        </div>

                        <div id="subHeader">
                            {/* <h2>Visit places and Post your experiences</h2> */}

                            <div className="container">
                                <Link to="/Login"><button>Login </button></Link>
                                <Link to="/SignUp"><button>SignUp</button></Link>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;