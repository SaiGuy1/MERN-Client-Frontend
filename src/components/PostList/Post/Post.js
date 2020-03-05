import React from "react";
import Modal from 'react-bootstrap/Modal';

import { NavLink, Link } from 'react-router-dom';

const post = (props) => {
  return(
    <>
    <div class="card mb-3 mt-5 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{minWidth: 30 + 'vw'}}>
      <div class="row no-gutters">
      <div class="col-lg-4">
        <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
        <Link to ={{
            pathname: '/postdetail/'+ props.post._id,
            state: {
                id: props.post._id
            }
           }} >
        <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
        </Link>
        <button type="edit-button" class="btn btn-outline-primary mt-1 btn-block" >Edit Post</button>


        <button type="delete-button" class="btn btn-outline-danger mt-1 btn-block" onClick={() => this.setState({ show: true })}>Delete Post</button>


      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.post.city}</h5>
            <h5 class="card-title">{props.post._id}</h5>
            <p class="card-text">{props.post.content}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default post;
