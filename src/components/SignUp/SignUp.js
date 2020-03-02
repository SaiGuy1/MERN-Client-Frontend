import React, { Component } from 'react';
import axios from 'axios';
require('dotenv')

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // console.log(`localhost:4000/api/v1/auth/signup`)
    axios
      .post(`localhost:4000/api/v1/auth/signup`, this.state, {
        withCredentials: true,
      })
      .then(res => {
        console.log('LOOLLLOLOLO:', res);
        localStorage.setItem({jwt: res.jwt});
      })
      .catch(err => console.log(err.res));
  };



  render() {
    return (
      <>
      <div>
          <h2>Sign Up</h2>

          <form>
          <div>
              <label htmlFor='email'>User Name</label>
              <input type='text' name='email' onChange={this.handleChange} />
          </div>

          <div>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.handleChange} />
          </div>

          <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' onChange={this.handleChange} />
          </div>
          <div>

            <input value='Submit' type='submit' onClick={this.handleSubmit} />
          </div>
          </form>
    </div>
    </>
    );
  }
}

export default SignUp;
