import React, {Component} from "react";

import axios from "axios";

import PostList from '../PostList/PostList';
import './PostDetail.css'

class PostDetail extends Component {

  state = {
    content: "",
    id: ""
  }

  componentDidMount = () => {

    const handleDelete = (event) => {
      axios.delete(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
    }


    console.log("POSTDETAIL")
    axios.get(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=> {
        console.log(res.data.content);
        // console.log(res.data[0].content);
        this.setState({
          content: res.data.content,
          id: res.data.id
        })
        // this.setState({
        //
        // })

      })
      .catch( err =>
        console.log(err)
      )
    }


    render() {
      return(
        <>
        <h1> Post Details</h1>
        <h2>{this.props.match.params.id}</h2>
        <div class="container">
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" >
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
              <div class="card-body">
                <h5 class="card-title">San Francisco</h5>
                <p class="card-text">{this.state.content}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
        </div>
        </>
      )
    }
}


export default PostDetail;
