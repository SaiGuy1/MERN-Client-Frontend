import React from 'react';
import './CreatePost.css';
import axios from 'axios';
import {  Form,
          FormGroup,
          FormControl,
          FormLabel } from 'react-bootstrap';

class CreatePost extends React.Component {

  state = {
    cities: []
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
          <div class="form-group">
            <label for="exampleFormControlFile1">City Picture</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
          </div>

        </Form>
      </div>
      </>
    );
  }

}

export default CreatePost;