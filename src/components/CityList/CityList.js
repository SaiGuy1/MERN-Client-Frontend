import React from 'react';
import axios from 'axios';
import City from './City/City'

class CityList extends React.Component {
  state = {
    cities:[]
  }
  componentDidMount(){
    axios 
      .get('http://localhost:4000/api/v1/location')
      .then(res => {
        console.log(res.data)
        this.setState({
          cities: res.data.AllLocation
        })
      })
      .catch(err => {
        console.log(err.response)
      })

  }
  displayLocation = cities =>{
    console.log('cities',cities);
    return cities.map(city => {
      return <City key={city._id} cityData={city}/>
    })
  }


  render(){
    return(
      <div className="mt-5">
        {this.displayLocation(this.state.cities)}
      </div>
    )
  }
}

export default CityList;