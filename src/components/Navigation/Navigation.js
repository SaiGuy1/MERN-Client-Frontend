import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink, Link } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

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
    let token = localStorage.getItem('jwt');
    if (token) {
      this.setState({
        islogin: true
      })
    } 
  }
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
  handleLogout(){
    localStorage.removeItem('jwt');
    window.location='/';
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
            {this.state.islogin ? (<><li className="nav-item active">
        <Link className="nav-link" to='/profile'>Profile</Link>
      </li><li className="nav-item active">
        <a className="nav-link" href="#" onClick={this.handleLogout}>Logout</a>
      </li></>) : (<><li className="nav-item active">
              <a className="nav-link" href="#" id="Login" bsStyle="primary" bsSize="large" onClick={this.handleLoginShow}>Log in</a>
              <Modal show={this.state.loginshow} onHide={this.handleLoginClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <Login />
                </Modal.Body>
              </Modal>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" id="Signup" bsStyle="primary" bsSize="large" onClick={this.handleSignupShow}>Sign up</a>
              <Modal show={this.state.signupshow} onHide={this.handleSignupClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <Signup />
                  <hr />
                  Need to log in? HERE
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



