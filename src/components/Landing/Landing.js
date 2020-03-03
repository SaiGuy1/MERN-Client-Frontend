import React, {Component} from 'react';

import Carousel from './Carousel/Carousel';
import Description from './Description/Description';
import CityPosts from './CityPosts/CityPosts';
import { withRouter } from 'react-router-dom';

class Landing extends Component {
  
  render(){
    return(
      <>
      {this.props.isLogin ? <CityPosts/> : <div><Carousel />
      <Description /></div>}
      </>
    )
  }
  
}

export default withRouter(Landing);