import React from 'react';
import './City.css'

class City extends React.Component {
  componentDidMount(){
    console.log('City props',this.props)
  }
render(){
  return(
    <div className="card mt-2 city-card">
      <div className="row">
      
        <div className="col-sm-5"><img className="city-img" src={this.props.cityData.img}/></div>
        <div className="col-sm-7"><p className="city-name">{this.props.cityData.city}</p></div>
      </div>
      
    </div>
  )
}

}

export default City;