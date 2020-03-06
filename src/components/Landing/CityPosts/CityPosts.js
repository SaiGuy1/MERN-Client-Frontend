import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CreatePost from './CreatePost/CreatePost';
import './CityPosts.css'
import CityList from '../../CityList/CityList';
import axios from 'axios';
import City from '../../CityList/City/City';
import Post from '../../PostList/Post/Post';
import LocationInfo from './LocationInfo/LocationInfo'

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
      currentCityPost:[],
      cities:[]
    };
  }

//GET, all city , move from cityList
componentDidMount(){
  axios 
    .get('http://localhost:4000/api/v1/location')
    .then(res => {
      console.log(res.data)
      this.setState({
        cities: res.data.AllLocation
      })
      let sfId = res.data.AllLocation.filter(location => location.cityId == 1)[0]._id
      this.handleCityClick(sfId);
    })
    .catch(err => {
      console.log(err.response)
    })

}

// Handle OPEN and CLOSE of CREATE POST
handleShow() {
  this.setState({ createpostshow: true });
}

handleClose() {
  this.setState({ createpostshow: false });
}


displayLocation = cities =>{
  console.log('cities',cities);
  return cities.map(city => {
    return <City key={city._id} cityData={city} handleCityClick={this.handleCityClick}/>
  })
}

//GET, get city posts click event from City component
handleCityClick = (cityId)=> {
  console.log('hii')
  axios
    .get(`http://localhost:4000/api/v1/posts/city/${cityId}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        currentCityPost:res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}

displayCityPost = posts => {
  console.log('citypost', posts)
  return posts.map(post => {
  return <Post key={post._id} post={post}/>
  })
}

render(){
  return(
    <>
    <div className="container citypostlist pt-5">
      <div className="row">
        {/* shelly */}
      <div className="col-sm-4"><CityList displayLocation={this.displayLocation} cities={this.state.cities}/></div>
       
        <div className="col-sm-8 card">
          {/* eric */}
        <button onClick={this.handleShow}>
          Create -- Will open createPost modal -- see wireframe
        </button>
        {/* eric end */}

          {this.state.currentCityPost.length == 0 ? <div>no post</div> :<><LocationInfo postLocation={this.state.currentCityPost[0].location}/><button className="btn btn-primary">Add new post</button>{this.displayCityPost(this.state.currentCityPost)}</>}
        </div>
        {/* ------- */}

        


        {/* modal */}
          <Modal show={this.state.createpostshow} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <h2>Create Post</h2>
            </Modal.Header>
            <Modal.Body>
              <CreatePost setCurrentUser={this.props.setCurrentUser}/>
              <hr />
            </Modal.Body>
          </Modal>
        
        {/* <div className="">
          <button>Delete -- will open confirm modal to delete post</button>
          <button>edit -- will open edit modal to delete post</button>
        </div> */}
        

        
        
      </div>
    </div>
    </>
   )
}
  
}


export default CityPost;