import React, {Component} from "react";
import { NavLink, Link } from 'react-router-dom';
import axios from "axios";


class PostList extends Component {

  state = {
        id: "",
        title: "",
        content: "",
        country: "United States",
        city: "San Francisco",
        cityId: 1
  }

  componentDidMount = () => {
    console.log("POSTLIST")
    axios.get(`http://localhost:4000/api/v1/posts` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=> {
        console.log(res.data);
        console.log(res.data[0].content);
        this.setState({
          content: res.data[0].content,
          id: res.data[0].id
        })
        // this.setState({
        //
        // })

      })
      .catch( err =>
        console.log(err)
      )
    }

    expand = () => {

    }

    render() {
      return(
        <>
        <div class= "row">
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}}>
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <Link to='/postdetail/'{...this.state.id}>
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
            </Link>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <h5 class="card-title">{this.state.id}</h5>
                <p class="card-text">{this.state.content}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}} >
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block">Post Detail</button>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <p class="card-text">It's a cool city</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}} >
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block">Post Detail</button>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <p class="card-text">It's a cool city</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class= "row">
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}}>
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block">Post Detail</button>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <p class="card-text">It's a cool city</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}} >
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block">Post Detail</button>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <p class="card-text">It's a cool city</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}} >
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
            <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block">Post Detail</button>
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{this.state.city}</h5>
                <p class="card-text">It's a cool city</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
      )
    }
  }

export default PostList;
