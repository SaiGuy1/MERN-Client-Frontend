import React, {Component} from "react";

import axios from "axios";

class Profile extends Component {

  state = {
      editUsername: false,
      editCity: false,
      username: '',
      cityVal: '',
      userData: {},
      cities: [],
      email: ''
  }

  componentDidMount = () => {
    console.log("WOWZA")
    axios.get(`http://localhost:4000/api/v1/profile`,{headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res=>{
          this.setState({
              userData: res.data.User,
              usernameVal: res.data.username,
          })
      })
      .catch(err=>console.log(err))

      this.setState({
          cities: ["London","San Francisco","Paris"]
      })

    // axios.get(`http://localhost:4000/api/v1/location`)
    //   .then(res=> {
    //     this.setState({
    //       console.log(res.AllLocation)
    //       cities:
    //     })
    //   })
  }
  handleChange = event => {
      let value = event.target.value;
      this.setState({
        email: value

      });

  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // console.log(`localhost:4000/api/v1/auth/signup`)
    axios.put(`http://localhost:4000/api/v1/profile/update`, {username: this.state.username, email:this.state.email} , {headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res => {
        console.log('LOOLLLOLOLO:', res)
        this.setState({
          email: res.email,
          username: res.username
        })
        // body: { email: '', password: '' }
        // localStorage.setItem({jwt: res.jwt});
      })
      .catch(err => console.log(err.res));
  };

  changeInput = () => {
    document.getElementById('EditInfo').style.display = "block";
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState)
  // }

  render() {
//alert(this.state.cityVal)
      return(
<div>
  <h2>Hello</h2>
  <p>
      Username: {this.state.username}
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
  <div>
      Email: {this.state.email}
      <button class="edit" onClick={this.changeInput}> Edit Info </button>
      <form id="EditInfo" style={{display: "none"}}>
      <div>
          <label htmlFor='email'>New Email</label>
          <input type='email' name='email' onChange={this.handleChange} />
      </div>
      <div>
          <label htmlFor='username'>New Username</label>
          <input type='username' name='username' onChange={this.handleChange} />
      </div>
      <div>
        <input value='Submit' type='submit' onClick={this.handleSubmit} />
      </div>
      </form>
  </div>
  <p>
      Join Date: {this.state.userData.createdAt}
  </p>
  </div>

      )
  }
}

export default Profile;
