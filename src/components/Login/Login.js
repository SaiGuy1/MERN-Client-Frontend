import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {  Form,
          FormGroup,
          Col,
          FormLabel,
          FormControl,
          Button } 
          from 'react-bootstrap'

class Login extends Component {
  constructor(props, context){
    super(props, context);


  }
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
      .post(`http://localhost:4000/api/v1/auth/login`, this.state, {

      })
      .then(res => {
        console.log(res);
        // stores token into local storage
        let jwt = res.data.jwt;
        this.props.setCurrentUser(jwt)
        
        window.location='/profile';
       
      })
      .catch(err => console.log(err.response));
  };


  render () {
    return (
        <div>
            <div>
              {/* New SIGNUP form */}
              <Form horizontal>
                {/* <FormGroup controlId="formHorizontalUsername">
                  <Col componentClass={FormLabel} sm={2}>
                  Username
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" name='username' onChange={this.handleChange} placeholder="Username" />
                  </Col>
                </FormGroup> */}

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
                    <Button value='Submit' type='submit' onClick={this.handleSubmit} >Log in</Button>
                  </Col>
                </FormGroup>
              </Form>
                
                {/* Old LOGIN form to be DEPRECATED */}
                {/* <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' onChange={this.handleChange} />
                </div>
                <input value='Submit' type='submit' onClick={this.handleSubmit} />
                <button className='btn btn-primary float-right mb-5' value='Submit' type='submit' onClick={this.handleSubmit}>Signup</button>
                </form> */}
            </div>
          </div>
    )
  }
}

export default Login;
