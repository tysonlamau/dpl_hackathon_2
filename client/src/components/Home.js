import React, { Component } from 'react';
import {
  Container,
  Grid,
  Image,
  Header,
  Divider,
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Image
            fluid
            style={{
              "height" : "90%",
              "width" : "90%"
            }}
            src="https://sifu.unileversolutions.com/image/en-US/recipe-topvisual/2/1260-709/taiwanese-beef-noodle-soup-50294784.jpg"
          />
          <Divider hidden />
          <Grid.Row>
            <Header as="h3">Contact Us</Header>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Header as="h5">
              Mom’s Kitchen | (801)486-0092 | 2233 S
              State St, Salt Lake City, UT 84115
            </Header>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
