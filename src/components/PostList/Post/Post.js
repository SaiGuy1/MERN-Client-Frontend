import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import {  Button,
          Col,
          Form,
          FormGroup,
          FormControl,
          FormLabel } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import CreatePost from '../../Landing/CityPosts/CreatePost/CreatePost'
import axios from "axios";

class Post extends Component {

state ={
  postData: {},
}

componentDidMount = () => {
  
}

handleEdit = (event) => {
  event.preventDefault();
  document.getElementById("editForm").style.display = ""
}

handleDelete = (event) => {

  axios.delete(`http://localhost:4000/api/v1/posts/${this.props.post._id}` ,{
    headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {

      console.log(err)
    })
}

handleEditSubmit = (event) => {
  event.preventDefault();
  console.log("PROPS ---------------->", this.props.post)

  axios.put(`http://localhost:4000/api/v1/posts/${this.props.post._id}`, this.state.postData ,{
    headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}
  })
    .then(res => {
      console.log("PROPS ID ---------------->", this.props.post._id)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

render(){
  return(

    <>
    <div className="card mt-4 mb-3 ml-5 shadow p-3 bg-white rounded" >
      <div className="row no-gutters">
      <div className="col-lg-4">
        <img src={"https://i.ibb.co/tMG6d9p/images.jpg" } className="card-img" />
        <Link to ={{
            pathname: '/postdetail/'+ this.props.post._id,
            state: {
                id: this.props.post._id
            }
           }} >
        <button type="detail-button" className="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
        </Link>
        <button type="edit-button" className="btn btn-outline-primary mt-1 btn-block" onClick={this.handleEdit}>Edit Post</button>

        <button type="delete-button" className="btn btn-outline-danger mt-1 btn-block" onClick={this.handleDelete}>Delete Post</button>

      </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{this.props.post.location && this.props.post.location.city}</h5>
            <h3 className="card-title">{this.props.post.title}</h3>
            <p className="card-text">{this.props.post.content}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div id="editForm" style={{display: "none"}}>
      <Form>
        {/* CITY SELECT functionality */}

        {/* TITLE functionality */}
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl id="title" type="text" placeholder="Title" onChange={this.handlePostTitle}/>
        </FormGroup>
        {/* TEXT AREA functionality */}
        <FormGroup>
          <FormLabel>Post</FormLabel>
          <FormControl id="content" as="textarea" rows="5" placeholder="Adventure goes here" onChange={this.handlePostContent}/>
        </FormGroup>
        {/* Add a PICTURE functionality */}
        {/* <div className="form-group">
          <label id="picture" for="exampleFormControlFile1">City Picture</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
        </div> */}
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button value='Submit' type='submit' onClick={this.handleEditSubmit} >Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    </div>
    </>
  )
}
}

export default Post;
