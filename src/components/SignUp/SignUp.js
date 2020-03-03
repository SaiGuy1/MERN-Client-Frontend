import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
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
        let jwt = res.data.jwt
        localStorage.setItem('jwt',jwt);
        window.location='/profile';
        // this.props.history.push('/profile');
        
      })
      .catch(err => console.log(err.res));
  };



  render() {
    return (
      <>
      <div>
          <h2>Sign Up</h2>

          <form>
          <div className="form-group">
              {/* <label htmlFor='username'>User Name</label> */}
              <input type='text' name='username' onChange={this.handleChange} aria-describedby="usernameHelp" placeholder="Enter UserName" />
              <small id="usernameHelp" class="form-text text-muted">Required - must be at least 4 characters</small>
          </div>

          <div className="form-group">
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.handleChange} placeholder="Enter UserName" />
          </div>

          <div className="form-group">
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' onChange={this.handleChange} />
          </div>
            <button className='btn btn-primary float-right mb-5' value='Submit' type='submit' onClick={this.handleSubmit}>Signup</button>
         
          </form>
    </div>
    </>
    );
  }
}

export default withRouter(Signup);
