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
  state = { search: ""}

  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({search: e.target.value})
    console.log(e.target.value)
  }

  render() {
    const { dishes } = this.props;
    return (
      <Container>
        <form onClick={this.handleSubmit}>
          <input onChange={this.handleChange} />
        </form>
        <List>
          {dishes.map((d) => ( d.dish.includes(this.state.search) ?
            <List.Item>
              {d.dish} - {d.price}
            </List.Item>
            :
            null
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
