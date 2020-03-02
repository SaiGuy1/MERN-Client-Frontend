import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import axios from 'axios';

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {

      })
      .then(res => {
        console.log(res);
        // stores token into local storage
        localStorage.setItem({jwt: res});
        this.props.setCurrentUser(res.data.data);
        this.props.history.push('/profile');
      })
      .catch(err => console.log(err.response));
  };


  render () {
    return (
        <div>

            <div>
                <h2>Log In</h2>

                <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' onChange={this.handleChange} />
                </div>
                <input value='Submit' type='submit' onClick={this.handleSubmit} />
                </form>
            </div>

          </div>

    )
  }
}

export default LogIn;
