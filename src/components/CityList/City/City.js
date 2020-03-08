import React from 'react';
import './City.css'

class City extends React.Component {
  
render(){
  return(
    <div className="card mb-2 city-card" onClick={()=> this.props.handleCityClick(this.props.cityData._id)}>
      <div className="row">
      
        <div className="col-sm-5"><img className="city-img" src={this.props.cityData.img}/></div>
        <div className="col-sm-7"><p className="city-name">{this.props.cityData.city}</p></div>
      </div>
      
    </div>
  )
}

}

export default City;