import React, { Component } from "react";

import axios from "axios";

import PostList from '../PostList/PostList';
import './PostDetail.css'

class PostDetail extends Component {

  state = {
    currentPost: {},
    id: ""
  }

  componentDidMount = () => {

    const handleDelete = (event) => {
      axios.delete(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}`, { headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` } })
    }


    console.log("POSTDETAIL")
    axios.get(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}`, { headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` } })
      .then(res => {
        console.log('res.data.content',res.data.content);
        console.log('res.data',res.data);
        // console.log(res.data[0].content);
        this.setState({
          
          id: res.data.id,
          currentPost: res.data
        })
        // this.setState({
        //
        // })

      })
      .catch(err =>
        console.log(err)
      )
  }


  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-1 col-lg-3"></div>
            <div className="col-sm-10  col-lg-6">
              <div className="card p-3 shadow bg-white rounded singlepost" >
                <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} className="card-img detailpost-image" />
                <div className="card-body">
    { this.state.currentPost.location ? <><h3 className="card-title">{this.state.currentPost.title}</h3><h5 className="text-muted">{this.state.currentPost.location.city}, <span>{this.state.currentPost.location.country}</span></h5>
                  <p className="card-text">{this.state.currentPost.content}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p></> : <><h5 className="card-title">San Francisco</h5>
                  <p className="card-text">content Loading...</p>
    <p className="card-text"><small className="text-muted">Loading ...</small></p></>}
                  
                </div>
              </div>
            </div>
            <div className="col-sm-1  col-lg-3"></div>
          </div>
        </div>
      </>
    )
  }
}


export default PostDetail;
