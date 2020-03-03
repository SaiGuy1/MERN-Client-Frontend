import React from 'react';


class PostList extends Component {
  componentDidMount = () => {
    console.log("WOWZA")
    axios.get(`http://localhost:4000/api/v1/posts`)
      .then(res=> {
        console.log(res.data);
      })
    }
  }
