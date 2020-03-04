import React, {Component} from 'react';

import Carousel from './Carousel/Carousel';
import Description from './Description/Description';
import CityPosts from './CityPosts/CityPosts';


class Landing extends Component {
  // constructor(props,context) {
  //   super(props, context);
  //   console.log(this.props);
  // }
  render(){
    return(
      <>
      {this.props.isLogin ? <CityPosts/> : <div> <Carousel />
      <Description /></div>}
      
      </>
    )
  }
  
}

export default Landing;