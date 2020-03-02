import React, {Component} from "react";

import axios from "axios";

class Profile extends Component {

  state = {
      editUsername: false,
      editCity: false,
      usernameVal: '',
      cityVal: '',
      userData: {},
      cities: []
  }

  componentDidMount = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/users`,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
      .then(res=>{
          this.setState({
              userData: res.data,
              usernameVal: res.data.username,
              cityVal: res.data.city
          })
      })
      .catch(err=>console.log(err))
      this.setState({
          cities: ["London","San Francisco","Paris"]
      })
  }

  handleInput = (e,option) => {
      this.setState({ [option]: e.target.value })
  }

  changeInputClick = (option) => {
      this.setState({[option]: true})
  }

  stopEdit = (option) => {
      this.setState({[option]: false})
  }

  render() {
//alert(this.state.cityVal)
      return(
<div>
  <h2>Hello</h2>
  <p>
      Username:
      {
      !this.state.editUsername?
          <span onClick={()=>this.changeInputClick("editUsername")}>
            {this.state.usernameVal}
          </span> :
          <input type="text" name="username"
              defaultValue={this.state.usernameVal}
              onChange={(e)=>this.handleInput(e,"usernameVal")}
              onBlur={()=>this.stopEdit("editUsername")}
          />
      }
  </p>
  <p>
    City:
    <select onChange={this.handleInput} name="city">
      {
      this.state.cities.map((city,index)=>(
        city!==this.state.cityVal ? <option key={index+1} value={city}>{city} </option> :
        <option key={index+1} value={city} selected>{city}</option>
      ))
      }
    </select>
  </p>
  <p>
      Email: {this.state.userData.email}
  </p>
  <p>
      Join Date: {this.state.userData.joindate}
  </p>
</div>
      )
  }
}

export default Profile;
