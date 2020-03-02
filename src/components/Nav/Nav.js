import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import LogIn from '../LogIn/LogIn.js';
import SignUp from '../SignUp/SignUp.js';
// import Button from 'react-bootstrap/Button'
import './Nav.css';

class Nav extends React.Component {
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
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <p>WAYFARER</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Login/Signup
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <h4>Popover in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={popover}>
                  <a href="#popover">popover</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <hr />
  
              <h4>Overflowing text to show scroll behavior</h4>
              <LogIn isLoggedIn={this.state.isLoggedIn} handleLogIn={this.loggedIn} handleLogOut={this.loggedOut}/>
              <SignUp />
              
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
//   render(<Example />);
  
  // onclick function for button 
    // render modal 
    // document.getElementById("demo").onclick = function() {myFunction()};
    // document.getElementsByClassName("LogIn").onclick = function() {Example()};

// class Nav extends Component {
//     render() {
//         return(
//             <header>
//                 <nav className="navbar">
//                     <div className="navbar-div">
//                         <h1 className="wayfarer-heading">WAYFARER</h1>                            
//                             <button className="LogIn">Log in</button>
//                             <button className="SignUp">Sign up</button>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }
// }

export default Nav;