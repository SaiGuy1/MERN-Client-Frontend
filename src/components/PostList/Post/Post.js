import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormControl,
  FormLabel
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import CreatePost from '../../Landing/CityPosts/CreatePost/CreatePost'
import axios from "axios";
import jwt from "jsonwebtoken"

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: this.props.post,
      showbtn: "none",
      deleted: false,
      editting: false,
      tempPostData: null
    }
    // this.checkCurrentUser();
  }
  handleTitle = (e) => {
    const value = e.target.value;
    this.setState({
      postData: {
        ...this.state.postData,
        title: value
      }
    })
  }

  handleContent = (e) => {
    const value = e.target.value;
    this.setState({
      postData: {
        ...this.state.postData,
        content: value
      }
    })
  }
  handleEdit = (event) => {
    event.preventDefault();
    this.setState({ editting: true })
  }


  handleDelete = (event) => { 

    axios.delete(`http://localhost:4000/api/v1/posts/${this.props.post._id}`, {
      headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` }
    })
      .then(res => {
        console.log(res)
        this.setState({
          deleted: true
        })

      })
      .catch(err => {

        console.log(err)
      })
  }

  checkCurrentUser = () => {
    let userId = jwt.decode(localStorage.getItem('jwt')).foo
    // console.log('userId',userId)
    if (this.props.post.user) {
      console.log('it exist')
      console.log('this.user', this.props.post.user._id)
      console.log('userId',userId)
      console.log('the same', this.props.post.user._id == userId)
      if (this.props.post.user._id == userId) {
          console.log('the same', this.props.post.user._id == userId)
        
        this.setState({
          showbtn: "block"
        })
        console.log(this.state)
      }
    }
   
  }
  handleEditSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/api/v1/posts/${this.state.postData._id}`, this.state.postData, {
      headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` }
    })
      .then(res => {
        this.setState({tempPostData: res.data})
        this.setState({ editting: false })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let userId = jwt.decode(localStorage.getItem('jwt')).foo;
    return (<>{!this.state.deleted && <>
        <div className="card mt-4 mb-3 ml-5 shadow p-3 bg-white rounded" >
          <div className="row no-gutters">
            <div className="col-lg-4">
              <img src={this.state.postData ? this.state.postData.img : "https://i.ibb.co/tMG6d9p/images.jpg"} className="card-img" />
              <Link to={{
                pathname: '/postdetail/' + this.state.postData._id,
                state: {
                  id: this.state.postData._id
                }
              }} >
                <button type="detail-button" className="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
              </Link>
              {(this.props.post.user && userId === this.props.post.user._id) && <>
                <button id="editbtn" type="edit-button" className="btn btn-outline-primary mt-1 btn-block" onClick={this.handleEdit}>Edit Post</button>
                <button type="delete-button" id="deletebtn" className="btn btn-outline-danger mt-1 btn-block" onClick={this.handleDelete}>Delete Post</button>
              </>}

            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{(this.state.tempPostData&&this.state.tempPostData.title) || this.props.post.title}</h3>
                {(this.state.tempPostData)?<p className="text-muted">{this.state.tempPostData.location.city}, {this.state.tempPostData.location && this.state.tempPostData.location.country}</p>:
                <p className="text-muted">{this.props.post.location && this.props.post.location.city}, {this.props.post.location && this.props.post.location.country}</p>}
                <p className="card-text">{(this.state.tempPostData&&this.state.tempPostData.content) || this.props.post.content}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          {this.state.editting && <div>
            <Form>
              {/* CITY SELECT functionality */}

              {/* TITLE functionality */}
              <FormGroup>
                <FormLabel>Title</FormLabel>
                <FormControl id="title" type="text" placeholder="Title" value={this.state.postData.title} onChange={this.handleTitle} />
              </FormGroup>
              {/* TEXT AREA functionality */}
              <FormGroup>
                <FormLabel>Post</FormLabel>
                <FormControl id="content" as="textarea" rows="5" placeholder="Adventure goes here" value={this.state.postData.content} onChange={this.handleContent} />
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
          </div>}
        </div>
      </>}</>)
  }
}

export default Post;
