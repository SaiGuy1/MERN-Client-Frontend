import React, {Component} from "react";

import axios from "axios";

import PostList from '../PostList/PostList';

class PostDetail extends Component {

  state = {
    content: "",
    id: ""
  }

  componentDidMount = () => {
    console.log("POSTDETAIL")
    axios.get(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=> {
        console.log(res.data);
        console.log(res.data[0].content);
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
        <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded">
          <div class="row no-gutters">
          <div class="col-lg-4">
            <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
          </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">San Francisco</h5>
                <p class="card-text">{this.props.match.params.content}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
}


export default PostDetail;
