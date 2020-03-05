import React from 'react';
import './CityPosts.css'

const CityPost = props => {
  return(
   <div className="container">
     <div className="row">
       <div className="col-sm-3">Here put the city list</div>
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


export default CityPost;