import React from 'react';
import './CreatePost.css';

class CreatePost extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    console.log('bodytosend',this.state.userData);
    
    axios.put(`http://localhost:4000/api/v1/profile/update`, this.state.userData , {headers: {"authorization": `bearer ${localStorage.getItem('jwt')}`}})
      .then(res => {
        console.log('updateUser', res.data.data.updatedUser)

        this.setState({
          userData:res.data.data.updatedUser
        })
      })
      .catch(err => console.log(err.res));
  };



  render() {
    console.log('Creating new POST');
    return (
      <>
      <div>
        <Form>
          {/* CITY SELECT functionality */}
          <div>
            <select onChange={this.handleCity.bind(this)}>
            {
              this.state.cities.map(city => {
              // console.log(city)
              // console.log('incity userdata',this.state.userData);
                if (!this.state.userData.location) {
                // console.log('no location')
                  return <option key={city._id} value={city._id}>{city.city}</option>
                } else {
                  // console.log('yes location')
                  var selected = (city._id === this.state.userData.location._id) ? 'selected' : 'false';
                  return <option key={city._id} value={city._id} selected={selected}>{city.city}</option>
                }
              })
            }
            </select>
          </div>
          
          {/* TITLE functionality */}
          <FormGroup>
            <FormControl type="text" placeholder="Title" />
          </FormGroup>

          {/* TEXT AREA functionality */}
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Title</FormLabel>
            <FormControl componentClass="textarea" rows="3" placeholder="Adventure goes here" />
          </FormGroup>

          {/* Add a PICTURE functionality */}
          <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
          </div>

        </Form>
      </div>
      </>
    );
  }

}

export default CreatePost;