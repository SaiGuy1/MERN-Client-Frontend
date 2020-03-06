import React, {Component} from "react";

import axios from "axios";

import PostList from '../PostList/PostList';
import './PostDetails.css'
class PostDetail extends Component {

  state = {
    currentPost:{}
  }

  componentDidMount = () => {
    console.log("POSTDETAIL")
    axios.get(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=> {
<<<<<<< HEAD
        console.log(res.data.content);
        // console.log(res.data[0].content);
=======
        console.log(res.data);
        console.log(res.data.location.country);
>>>>>>> 3ff1bcc131151648dcecfd42db8cc8ec514f6a34
        this.setState({
          content: res.data.content,
          id: res.data.id,
          currentPost: res.data
        })
      })
      .catch( err =>
        console.log(err)
      )
    }

    render() {
      return(
<<<<<<< HEAD
        <>
        <h1> Post Details</h1>
        <h2>{this.props.match.params.id}</h2>
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded "  style={{width: 45 +'vw'}}>
          <div class="row no-gutters">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
=======
        <div className="container mt-5">
        <div className="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} className="card-img detailpost-image" />
          
          <div>
            {this.state.currentPost.title?<div class="">
>>>>>>> 3ff1bcc131151648dcecfd42db8cc8ec514f6a34
              <div class="card-body">
              <h3 class="card-title">
                {this.state.currentPost.title}
              </h3>
                <h5>{this.state.currentPost.location.country},{this.state.currentPost.location.city}</h5>
                <p class="card-text">{this.state.currentPost.content}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
<<<<<<< HEAD
=======
            </div>:<div>Loading details ...</div>}
>>>>>>> 3ff1bcc131151648dcecfd42db8cc8ec514f6a34
          </div>
        </div>
        </div>
      )
    }
}


export default PostDetail;
