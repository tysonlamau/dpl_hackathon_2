import React from 'react';
import { connect } from 'react-redux';
import {
  getDishes,
  updateDish,
} from '../actions/dishes';
import {
  Container,
  Grid,
  Header,
  Segment,
  Card,
  Divider,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';

class Cart extends React.Component {
  state = { showComplete: false, found: false }

  render() {
    const { dishes } = this.props;
    return (
      dishes.map((d) => {<div>Dish: {d.dish} - Price: {d.price} - purschases: {d.purchase} - views: {d.views} - revenue: {d.purchase * d.price}</div>})
    )
  }
}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(Cart);
