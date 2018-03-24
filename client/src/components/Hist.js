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

class Hist extends React.Component {

  componentDidMount(){
    this.props.dispatch(getDishes());
  }

  render() {
    const { dishes } = this.props;
    return ( dishes.map((d) => <div>Dish: {d.dish} - Price: {d.price} - purschases: {d.purchase} - views: {d.views} - revenue: {d.purchase * d.price}</div>))
  }

}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(Hist);
