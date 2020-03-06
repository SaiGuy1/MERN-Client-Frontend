import React from 'react';


class CityList extends React.Component {


  render(){
    return(
      <div className="">
        {this.props.displayLocation(this.props.cities)}
      </div>
    )
  }
}

export default CityList;