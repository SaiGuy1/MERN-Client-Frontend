import React, {Component} from "react";

import axios from "axios";
import './Profile.css'

class Profile extends Component {

  state = {
    
      city: '',
      userData: {},
      cities: [],
      email: '',
      joinDate: '',
     
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
    document.getElementById('savebtn').style.display = "none";
    document.getElementById('editbtn').style.display = ""
    document.getElementById('cancelbtn').style.display = "none"
    document.getElementById('location').disabled = "null";
    document.getElementById('username').disabled = "null";
    
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

  toggleEdit = (event) => {
    event.preventDefault();
    document.getElementById('savebtn').style.display = "";
    document.getElementById('editbtn').style.display = "none"
    document.getElementById('cancelbtn').style.display = ""
    document.getElementById('location').disabled = false;
    document.getElementById('username').disabled = false;
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
  <div className="container">
    <div className="row mt-5">
      <div className="col-sm-3">
  <form>
  <div ><img src="https://i.imgur.com/cG6YD9S.jpg"/></div>
  <div className="form-group">
    <label for="username">Username</label>
    <input type="username" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" value={this.state.userData.username} disabled onChange={this.handleUserNameChange}/>
    
  </div>
  <div className="form-group"> 
  <label for="location">Location</label>
  <select id="location" name="location" class="form-control" onChange={this.handleCity.bind(this)} disabled>
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
    <div className="form-group">
    <button id="editbtn" className="edit btn btn-primary " onClick={this.toggleEdit}> Edit Info </button>
    
    <button id="savebtn" style={{display: "none"}} type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
    <button id="cancelbtn" style={{display: "none"}} className="edit btn btn-secondary" onClick={this.toggleEdit}> Cancel </button>
    </div>
  <div className="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userData.email} disabled/>
    
  </div>
 
 
    <div className="form-group">
      <label>Join Date</label>
      <input type="string" className="form-control" id="date" aria-describedby="dateHelp" placeholder="Enter date" value={this.state.joinDate} disabled/>
    
    </div>
  
    
</form>
</div>
<div className="col-sm-9">
  here is the posts!
</div>
</div>
</div>
  </div>

      )
  }
}

export default Profile;
