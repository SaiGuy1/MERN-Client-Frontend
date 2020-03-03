import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
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
      .post(`http://localhost:4000/api/v1/auth/signup`, this.state, {
      })
      .then(res => {
        console.log('LOOLLLOLOLO:', res)
        // body: { email: '', password: '' }
        // localStorage.setItem({jwt: res.jwt});
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
              <label htmlFor='username'>User Name</label>
              <input type='text' name='username' onChange={this.handleChange} />
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
