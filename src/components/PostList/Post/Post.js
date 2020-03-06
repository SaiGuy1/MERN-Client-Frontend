import React from "react";
import Modal from 'react-bootstrap/Modal';

import { NavLink, Link } from 'react-router-dom';

const post = (props) => {
  return(
    <>
    <div className="card mb-3  shadow p-3 bg-white rounded" style={{minWidth: 30 + 'vw'}}>
      <div className="row no-gutters">
      <div className="col-lg-4">
        <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} className="card-img" />
        <Link to ={{
            pathname: '/postdetail/'+ props.post._id,
            state: {
                id: props.post._id
            }
           }} >
        <button type="detail-button" className="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
        </Link>
        <button type="edit-button" className="btn btn-outline-primary mt-1 btn-block" >Edit Post</button>

        <button type="delete-button" className="btn btn-outline-danger mt-1 btn-block" onClick={() => this.setState({ show: true })}>Delete Post</button>

      </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.post.location && props.post.location.city}</h5>
            <h3 className="card-title">{props.post.title}</h3>
            <p className="card-text">{props.post.content}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default post;
