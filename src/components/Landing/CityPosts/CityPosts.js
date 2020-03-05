import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CreatePost from '../../CreatePost/CreatePost';
import './CityPosts.css'
import CityList from '../../CityList/CityList';

class CityPost extends React.Component {

  constructor(props, context) {
    super(props, context);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleSignupShow = this.handleSignupShow.bind(this);
    // this.handleSignupClose = this.handleSignupClose.bind(this);
    this.state = {
      createpostshow: false,
      // signupshow:false,
    };
  }

state = {
  currentCityPost:{
    title: "abc",
    content: "iii",
    user: {},
    location: {}
  }
}

//GET, all city , move from cityList
//GET, get city posts click event from City component, 

// Handle OPEN and CLOSE of CREATE POST
handleShow() {
  this.setState({ createpostshow: true });
}

handleClose() {
  this.setState({ createpostshow: false });
}

render(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-3"><CityList/></div>
        <div className="col-sm-6">Here put the city post
        <button onClick={this.handleShow}>
          Create -- Will open createPost modal -- see wireframe
        </button>
          <Modal show={this.state.createpostshow} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <h2>Create Post</h2>
            </Modal.Header>
            <Modal.Body>
              <CreatePost setCurrentUser={this.props.setCurrentUser}/>
              <hr />
            </Modal.Body>
          </Modal>
        
        <div className="">
          <button>Delete -- will open confirm modal to delete post</button>
          <button>edit -- will open edit modal to delete post</button>
        </div>
        </div>
      </div>
    </div>
   )
}
  
}


export default CityPost;