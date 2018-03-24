import React, { Component } from 'react';
import {
  Divider,
  Container,
  ui,
  embed,
  Link,
  Image,
 } from 'semantic-ui-react';

const iframe = {
  // <iframe
    // width="400"
    // height="300"
    // frameborder="0"
    // style="border:0"
    // allowfullscreen
    // >
  // />
}
class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <br/>
          <h1>About Us</h1>
          <br/>
          <Container>
            <p>Mom’s Kitchen is a cornerstone in the Salt Lake City community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff.</p>
            <p>Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.</p>
            <p>Mom’s Kitchen offers delicious dining and takeout to Salt Lake City, UT.</p>
          </Container>
          <br/>
          <h1>Location</h1>
          <p>2233 S State St, Salt Lake City, UT 84115</p>
        </Container>
      </div>
    );
  }
}

export default About;
