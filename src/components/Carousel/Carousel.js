import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'

class HeroCarousel extends React.Component {

  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
          <Carousel.Caption>
            <h3>San Franciso, CA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1555016588-601b35ab882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
          <Carousel.Caption>
            <h3>Sleeping Bear Dunes, MI</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1576135914878-da3e608010b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
          <Carousel.Caption>
            <h3>Fresno, CA</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HeroCarousel