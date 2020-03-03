import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
// import Popover from 'react-bootstrap/Popover'
// import Tooltip from 'react-bootstrap/Tooltip'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import LogIn from '../LogIn/LogIn.js';
import SignUp from '../SignUp/SignUp.js';
// import Button from 'react-bootstrap/Button'
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
    //   NAVBAR and MODAL design
      return (
        <nav>Wayfarer
          <Button id="LogIn" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Login
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <LogIn />
              <hr />
              Need to sign up? HERE
            </Modal.Body>
          </Modal>
          <Button id="SignUp" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Signup
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <SignUp />
              <hr />
              Need to log in? HERE
            </Modal.Body>
          </Modal>
        </nav>
      );
    }
  }



  




export default Navigation;