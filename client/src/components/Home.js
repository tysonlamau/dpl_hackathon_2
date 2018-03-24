import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <p>TODO:  ADD menu items from db</p>
        <div>
          <h1>Category</h1>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
          <h1>Second Category</h1>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
        </div>

        <h1>About</h1>
        <p>information</p>
        <div>
          <h1>Location</h1>
          <p>Location and contact info</p>
        </div>

      </div>
    );
  }
}

export default Home;
