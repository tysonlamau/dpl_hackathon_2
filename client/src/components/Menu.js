import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Grid,
  Card,
  Divider,
  Button,
  List,
} from 'semantic-ui-react';

class Menu extends React.Component {
  render() {
    const { dishes } = this.props;
    return (
      <Container>
        <List>
          {dishes.map((d) => (
            <List.Item>
              {d.dish} - {d.price}
            </List.Item>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(Menu);
