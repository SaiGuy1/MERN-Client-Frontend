import React from 'react';
import './CreatePost.css';
import axios from 'axios';
import {  Button,
          Col,
          Form,
          FormGroup,
          FormControl,
          FormLabel } from 'react-bootstrap';
class CreatePost extends React.Component {
  state = {
    cities: [],
    newPost: {},
    userData: {},
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
  // Updates POST CITY
  handleCity = (e) => {
    console.log(e.target.value)
    let index = e.nativeEvent.target.selectedIndex;
    this.setState({
      userData: {
        ...this.state.userData,
        location: {
          _id: e.target.value,
          city: e.nativeEvent.target[index].text
        }
      }
    })
  }
  // Updates POST TITLE
  handlePostTitle = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        title: value
      }
    });
  }
  // Updates POST BODY
  handlePostContent = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        content: value
      }
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log('Creating POST...');
    console.log('bodytosend', this.state.userData);
    document.getElementById('location').disabled = "null";
    document.getElementById('title').disabled = "null";
    document.getElementById('content').disabled = "null";
    // document.getElementById('picture').disabled = "null";
    axios.post(`http://localhost:4000/api/v1/posts/create`, this.state.userData, { headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` } })
      .then(res => {
        console.log('Posting...')
        console.log(res)
        console.log(res.data)
        this.props.handleClose();
      })
      .catch(err => {
        console.log(err.response)
        console.log('Post Fail')
      });
  };
    render() {
    console.log('Rendering new POST');
    return (
      <>
      <div>
        <Form>
          {/* CITY SELECT functionality */}
          <div>
            <select id="location" onChange={this.handleCity}>
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
            <FormControl id="title" type="text" placeholder="Title" onChange={this.handlePostTitle}/>
          </FormGroup>
          {/* TEXT AREA functionality */}
          <FormGroup>
            <FormLabel>Post</FormLabel>
            <FormControl id="content" as="textarea" rows="5" placeholder="Adventure goes here" onChange={this.handlePostContent}/>
          </FormGroup>
          {/* Add a PICTURE functionality */}

          <div className="form-group">
            <label for="exampleFormControlFile1">City Picture</label>
            <input type="text" className="form-control-file" id="exampleFormControlFile1"/>
            <small type="text" className="form-control-file" id="exampleFormControlFile1">please put your image url here!</small>
          </div>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button value='Submit' type='submit' onClick={this.handleSubmit} >Submit</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
      </>
    );
  }
}
export default CreatePost;
