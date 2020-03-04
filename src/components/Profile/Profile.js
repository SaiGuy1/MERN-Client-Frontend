import React, {Component} from "react";

import axios from "axios";

class Profile extends Component {

  state = {
    
      city: '',
      userData: {},
      cities: [],
      email: '',
      joinDate: '',
      editshow: ''
  }

  componentDidMount = () => {
    console.log("WOWZA")
    axios.get(`http://localhost:4000/api/v1/profile`,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=>{
        console.log(res.data.User);
        this.setState({
          joinDate: res.data.User.createdAt
        })
        delete res.data.User.createdAt;
        this.setState({
            userData: res.data.User,
        })
      })
      .catch(err=>console.log(err))

      this.setState({
          cities: ["London","San Francisco","Paris"]
      })

    axios.get(`http://localhost:4000/api/v1/location`)
      .then(res=> {
        console.log(res.data.AllLocation);
        this.setState({
          cities:res.data.AllLocation
        })
      })
  }
  handleEmailChange = event => {
      let value = event.target.value;
      this.setState({
        userData: {
          ...this.state.userData,
          email: value
        }
      });
  }
  handleUserNameChange = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        username: value
      }
    });
}

  handleSubmit = event => {
    event.preventDefault();
    console.log('bodytosend',this.state.userData);
    document.getElementById('EditInfo').style.display = "none";
    
    axios.put(`http://localhost:4000/api/v1/profile/update`, this.state.userData , {headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res => {
        console.log('updateUser')
        console.log(res)
        console.log(res.data)
        this.setState({
          userData:res.data
        })
      })
      .catch(err => console.log(err.res));
      
  };

  OpenEdit = () => {
    document.getElementById('EditInfo').style.display = "block";
  }


  handleCity = (e) => {
    console.log(e.target.value)
    let index=e.nativeEvent.target.selectedIndex;
    this.setState({
      userData:{
        ...this.state.userData,
        location: {
          _id:e.target.value,
          city: e.nativeEvent.target[index].text
        }
      }
    })
  }

  render() {
//alert(this.state.cityVal)
console.log('in render', this.state.userData)
      return(
<div>
  
  <p>
      Username: {this.state.userData.username}
  </p>
  {(this.state.userData && this.state.userData.location) && <p> City: {this.state.userData.location.city}
  </p>}
  <div>
      Email: {this.state.userData.email}
      <button className="edit btn btn-primary" onClick={this.OpenEdit}> Edit Info </button>
      <form id="EditInfo" style={{display: "none"}}>
      <div>
          <label htmlFor='email'>New Email</label>
          <input type='email' name='email' value={this.state.userData.email} onChange={this.handleEmailChange} />
      </div>
      <div>
          <label htmlFor='username'>New Username</label>
          <input type='username' name='username'  value={this.state.userData.username} onChange={this.handleUserNameChange} />
      </div>
      <div>
      <select onChange={this.handleCity.bind(this)}>
      {
      this.state.cities.map(city => {
        // console.log(city)
        // console.log('incity userdata',this.state.userData);
        if (!this.state.userData.location) {
          // console.log('no location')
          return <option key={city._id} value={city._id} >{city.city}</option>
        } else {
          // console.log('yes location')
          var selected = (city._id === this.state.userData.location._id) ? 'true' : '';
          return <option key={city._id} value={city._id} selected={selected} >{city.city}</option>
        }
      })
    }
    </select>
  
      </div>
      <div>
        <input className="btn btn-primary" value='Submit' type='submit' onClick={this.handleSubmit} />
      </div>
      </form>
  </div>
  <p>
      Join Date: {this.state.joinDate}
  </p>
  </div>

      )
  }
}

export default Profile;
