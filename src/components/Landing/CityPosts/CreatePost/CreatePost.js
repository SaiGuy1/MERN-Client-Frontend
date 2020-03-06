import React from 'react';
import './CreatePost.css';
import axios from 'axios';
import {  Form,
          FormGroup,
          FormControl,
          FormLabel,Button } from 'react-bootstrap';

class CreatePost extends React.Component {

  state = {
    cities: [],
    newPost: {}
  }

  // AXIOS call for all CITIES
  componentDidMount = () => {
  axios.get(`http://localhost:4000/api/v1/location`)
      .then(res=> {
        console.log(res.data.AllLocation)
        this.setState({
          cities:res.data.AllLocation
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handleSubmit(event){
    event.preventDefault();
    const token = localStorage.getItem('jwt')
    console.log(token)
    axios.post(`http://localhost:4000/api/v1/posts/create`, { headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` } })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    console.log('Creating new POST');
    return (
      <>
      <div>
        <Form>
          {/* CITY SELECT functionality */}
          <div>
            <select onChange={this.handleCity}>
            {
              this.state.cities.map(city => {
                return <option key={city._id} value={city._id}>{city.city}</option>
              })
            }
            </select>
          </div>
          
          {/* TITLE functionality */}
          <FormGroup>
            <FormLabel>Title</FormLabel>
            <FormControl type="text" placeholder="Title" />
          </FormGroup>

          {/* TEXT AREA functionality */}
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Post</FormLabel>
            <FormControl as="textarea" rows="5" placeholder="Adventure goes here" />
          </FormGroup>

          {/* Add a PICTURE functionality */}
          <div className="form-group">
            <label for="exampleFormControlFile1">City Picture</label>
            <input type="text" className="form-control-file" id="exampleFormControlFile1"/>
            <small type="text" className="form-control-file" id="exampleFormControlFile1">please put your image url here!</small>
          </div>
          <FormGroup>
                  
                    <Button value='Submit' type='submit' onSubmit={this.handleSubmit} >Post</Button>
                  
                </FormGroup>
        </Form>
      </div>
      </>
    );
  }

}

export default CreatePost;