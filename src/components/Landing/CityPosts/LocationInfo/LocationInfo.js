import React from 'react';

const LocationInfo = props => {
  return(
    <div className="row p-3 mb-3">
      <div className="col-sm-6"> 
        <h1>{props.postLocation.city}</h1>
        <h3>{props.postLocation.country}</h3>
      </div>
      <div className="col-sm-6">
        <img src={props.postLocation.img}/>
      </div>
    </div>
  )
}


export default LocationInfo;