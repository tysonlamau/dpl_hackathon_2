import React from 'react';
import { connect } from 'react-redux';
import {
  addDish,
  updateDish,
} from '../actions/dishes';
import { Form } from 'semantic-ui-react';

class AppForm extends React.Component {
  initialState = {
    dish: '',
    price: 0,
    category: '',
    description: '',
  };

  state = { ...this.initialState };

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dish = { ...this.state };
    const { closeForm, dispatch } = this.props;
    const func = this.props.id ? updateDish : addDish;
    dispatch(func(dish));
    closeForm();
  };

  render() {
    const {
      dish,
      price,
      category,
      description,
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="dish"
          required
          defaultValue={dish}
          onChange={this.handleChange}
          label="Dish"
        />
        <Form.Input
          name="price"
          required
          defaultValue={price}
          onChange={this.handleChange}
          label="Price"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <br />
        <Form.Button positive compact>
          Save
        </Form.Button>
      </Form>
    );
  }
}

export default connect()(AppForm);
