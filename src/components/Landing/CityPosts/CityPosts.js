import React from 'react';
import './CityPosts.css'
import CityList from '../../CityList/CityList';

class CityPost extends React.Component {

state = {
  currentCityPost:{
    title: "abc",
    content: "iii",
    user: {},
    location: {}
  }
}

//GET, all city , move from cityList
//GET, get city posts click event from City component, 


render(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-3"><CityList/></div>
        <div className="col-sm-6">Here put the city post
        <button>Create -- Will open createPost modal -- see wireframe</button>
        <div className="">
          <button>Delete -- will open confirm modal to delete post</button>
          <button>edit -- will open edit modal to delete post</button>
        </div>
        </div>
      </div>
    </div>
   )
}
  
}


export default CityPost;