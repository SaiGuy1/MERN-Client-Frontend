import React from "react";
import Modal from 'react-bootstrap/Modal';
import {  Form,
          FormGroup,
          FormControl,
          FormLabel } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import CreatePost from '../../Landing/CityPosts/CreatePost/CreatePost'
import axios from "axios";

const post = (props) => {

  const handleDelete = (event) => {
    console.log(props.post)
    axios.delete(`http://localhost:4000/api/v1/posts/${props.post._id}` ,{
      headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}
    })
      .then(res => {

        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleEdit = (event) => {
    console.log(props.post)
    axios.put(`http://localhost:4000/api/v1/posts/${props.post._id}` ,{
      headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return(

    <>
    <div class="card mt-4 mb-3 ml-5 shadow p-3 bg-white rounded" >
      <div class="row no-gutters">
      <div class="col-lg-4">
        <img src={"https://i.ibb.co/tMG6d9p/images.jpg" } class="card-img" />
        <Link to ={{
            pathname: '/postdetail/'+ props.post._id,
            state: {
                id: props.post._id
            }
           }} >
        <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
        </Link>
        <button type="edit-button" class="btn btn-outline-primary mt-1 btn-block" onClick={handleEdit}>Edit Post</button>


        <button type="delete-button" class="btn btn-outline-danger mt-1 btn-block" onClick={handleDelete}>Delete Post</button>


      </div>
        <div class="col-md-8">
          <div class="card-body">
            {<h5 class="card-title">{props.post.location.city}</h5>}
            {<h5 class="card-title">{props.post.title}</h5> }
            { <p class="card-text">{props.post.content}</p> }
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default post;
