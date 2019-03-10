import React, { Component } from 'react'
import '../LandingPage/Landing.css'
// import '../LogInForm/LogInForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div className="signUpForm">
        {/* <h2>Sign Up</h2> */}

        <form>

        <div >
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={this.props.handleInput} />
          </div>


          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          {/* <div>
            <label htmlFor='date'>Today's Date</label>
            <input type='date' name='joindate' onChange={this.props.handleInput} />
          </div> */}

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp}  />
        </form>
      </div>
    )
  }
}

export default SignUpForm
