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
  Form,
} from 'semantic-ui-react';
import DishForm from './DishForm';

class Menu extends React.Component {
  state = { showForm: false, search: '' };

  toggleForm = () => {
    this.setState((state) => {
      return { showForm: !state.showForm };
    });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { showForm } = this.state;
    const { dishes } = this.props;
    return (
      <Container textalign="center">
        <Button compact onClick={this.toggleForm}>
          {showForm ? 'Cancel' : 'Add Dish'}
        </Button>
        <Divider hidden />
        {showForm ? (
          <DishForm
            {...dishes}
            closeForm={this.toggleForm}
          />
        ) : (
          <div>
            <Form>
              <Form.Input
                onChange={this.handleChange}
                placeholder="Search Dishes..."
              />
            </Form>
            <List>
              {dishes.map(
                (d) =>
                  d.dish
                    .toLowerCase()
                    .includes(
                      this.state.search.toLowerCase(),
                    ) ? (
                    <List.Item>
                      {d.dish} - {d.price}
                    </List.Item>
                  ) : null,
              )}
            </List>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(Menu);
