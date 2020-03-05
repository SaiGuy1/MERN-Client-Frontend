import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props)
    
   

    this.handleLoginShow = this.handleLoginShow.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);
    this.handleSignupShow = this.handleSignupShow.bind(this);
    this.handleSignupClose = this.handleSignupClose.bind(this);
    this.state = {
      loginshow: false,
      signupshow:false,
      islogin:false
    };
  }

  componentDidMount(){
 
  }
  
  // Handle OPEN and CLOSE of LOGIN and SIGNUP
  handleLoginClose() {
    this.setState({ loginshow: false });
  }

  handleLoginShow() {
    this.setState({ loginshow: true });
  }
  
  handleSignupClose() {
    this.setState({ signupshow: false });
  }

  handleSignupShow() {
    this.setState({ signupshow: true });
  }
  
  // SWITCHING between SIGNUP and LOGIN **WIP**
  handleLoginSwitch = () => {
    console.log('Switching...');
    this.handleSignupClose();
    this.handleLoginShow();
  }
  
  handleSignupSwitch = () => {
    console.log('Switching...');
    this.handleLoginClose();
    this.handleSignupShow();
  }


  render() {
    //   NAVBAR and MODAL design
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to='/'>Wayfarer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <ul className="navbar-nav ml-auto">
            {this.props.isLogin ? (<><li className="nav-item active">
        <Link className="nav-link" to='/profile'>Profile</Link>
      </li><li className="nav-item active">
        <a className="nav-link" href="/" onClick={this.props.handleLogout}>Logout</a>
      </li></>) : (<><li className="nav-item active">
              <a className="nav-link" href="#" id="Login" bsstyle="primary" bssize="large" onClick={this.handleLoginShow}>Log in</a>
              <Modal show={this.state.loginshow} onHide={this.handleLoginClose}>
                <Modal.Header closeButton>
                <h2>Log In</h2>
                </Modal.Header>
                <Modal.Body>
                  <Login setCurrentUser={this.props.setCurrentUser}/>
                  <hr />
                  <a className="nav-link" href="#" id="Signup" bsstyle="primary" bssize="large" onClick={this.handleSignupSwitch}>Need to sign up?</a>
                </Modal.Body>
              </Modal>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" id="Signup" bsstyle="primary" bssize="large" onClick={this.handleSignupShow}>Sign up</a>
              <Modal show={this.state.signupshow} onHide={this.handleSignupClose}>
                <Modal.Header closeButton>
                <h2>Sign Up</h2>
                </Modal.Header>
                <Modal.Body>
                  <Signup setCurrentUser={this.props.setCurrentUser}/>
                  <hr />
                  <a className="nav-link" href="#" id="Login" bsstyle="primary" bssize="large" onClick={this.handleLoginSwitch}>Need to log in?</a>
                </Modal.Body>
              </Modal>
            </li></>)}

          </ul>
        </div>
      </nav>
    );
  }
}








export default Navigation;
