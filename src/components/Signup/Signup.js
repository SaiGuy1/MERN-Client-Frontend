import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {  Form,
          FormGroup,
          Col,
          FormLabel,
          FormControl,
          Button }
          from 'react-bootstrap'

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
        let jwt = res.data.jwt;
        this.props.setCurrentUser(jwt)
        
        window.location='/profile';
        // this.props.history.push('/profile');

      })
      .catch(err => console.log(err.res));
  };



  render() {
    return (
      <>
      <div>
      {/* New SIGNUP form */}
      <Form horizontal>
        <FormGroup controlId="formHorizontalUsername">
          <Col componentClass={FormLabel} sm={2}>
          Username
          </Col>
          <Col sm={10}>
            <FormControl type="text" name='username' onChange={this.handleChange} placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={FormLabel} sm={2}>
          Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" name='email' onChange={this.handleChange} placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={FormLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" name='password' onChange={this.handleChange} placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button className="btn-success" value='Submit' type='submit' onClick={this.handleSubmit} >Sign up</Button>
          </Col>
        </FormGroup>
      </Form>

        {/* Old LOGIN form  to be DEPRECATED*/}
        {/* <form>
        <div className="form-group">
          <label htmlFor='username'>User Name</label>
          <input type='text' name='username' onChange={this.handleChange} aria-describedby="usernameHelp" placeholder="Enter UserName" />
          <small id="usernameHelp" className="form-text text-muted">Required - must be at least 4 characters</small>
        </div>

        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' onChange={this.handleChange} placeholder="Enter Email" />
        </div>

        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' onChange={this.handleChange} placeholder="Enter password"/>
        </div>
          <button className='btn btn-success float-right mb-5' value='Submit' type='submit' onClick={this.handleSubmit}>Signup</button>
        </form> */}
      </div>
      </>
    );
  }
}

export default withRouter(Signup);
