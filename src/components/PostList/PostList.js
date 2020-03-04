import React, {Component} from "react";
import { NavLink, Link } from 'react-router-dom';
import axios from "axios";
import Post from './Post/Post';

class PostList extends Component {

  state = {
        id: [],
        title: "",
        content: [],
        country: "United States",
        city: "San Francisco",
        cityId: 1
  }



  componentDidMount = () => {
    console.log("POSTLIST")
    axios.get(`http://localhost:4000/api/v1/posts` ,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=> {
        console.log('data',res.data);
        this.setState({
          content:res.data
        })
        // console.log('res',res);
        // console.log(res.data.content);
        // let contentArr = [];
        // let idArr = [];
        //
        // for (let i = 0; i <res.data.length; i++){
        //     contentArr.push(res.data[i].content)
        //     idArr.push(res.data[i].id)
        // }
        //
        //
        //
        // console.log("ALL THE IDS", idArr)
        // this.setforState({
        //   id: idArr,
        //   content: contentArr
        // })

      })
      .catch( err =>
        console.log(err)
      )
    }

    expand = () => {

    }

    render() {
      console.log(this.state.content);
      let posts=null;
      posts = this.state.content.map(post => {
        console.log(post._id)
        return <Post key={post._id} post={post}/>
      })
      console.log(posts)
      return(
        <div>
          {posts}
        </div>
        // for(i = 0; i < this.state.id.length; i++) {
        // <>
        // <div class= "row happy birthday kenneth">
        // <div class="card mb-3 ml-3 mr-2 shadow p-3 mb-5 bg-white rounded" style={{width: 540 + 'px'}}>
        //   <div class="row no-gutters">
        //   <div class="col-lg-4">
        //     <img src={"https://i.ibb.co/M87rPqy/joseph-barrientos-Ji-G7-Bu1-Mo-M-unsplash.jpg"} class="card-img" />
        //     <Link to ={{
        //         pathname: '/postdetail/'+ this.state.id[i],
        //         state: {
        //             id: this.state.id[i]
        //         }
        //        }} >
        //     <button type="detail-button" class="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
        //     </Link>
        //   </div>
        //     <div class="col-md-8">
        //       <div class="card-body">
        //         <h5 class="card-title">{this.state.city[i]}</h5>
        //         <h5 class="card-title">{this.state.id[i]}</h5>
        //         <p class="card-text">{this.state.content[i]}</p>
        //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // </div>
        // </>
      // }
      )
    }
  }

export default PostList;
