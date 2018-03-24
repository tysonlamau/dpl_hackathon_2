import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  Card,
  Header,
  Segment,
  Image,
  Container,
  Button,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteDish } from '../actions/dishes';
import DishForm from './DishForm';

class MenuView extends React.Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState((state) => {
      return { showForm: !state.showForm };
    });
  };

  render() {
    const { showForm } = this.state;
    const { dish = {}, user } = this.props;

    return (
      <Container textalign="center">
        {showForm ? (
          <DishForm
            {...dish}
            closeForm={this.toggleForm}
          />
        ) : (
          <Grid>
            <Link to="/menu">
              <Button fluid color="blue">
                Back To Menu
              </Button>
            </Link>
            <Button onClick={this.toggleForm}>
              {showForm ? 'Cancel' : 'Edit'}
            </Button>
            <Link to="/menu">
              <Button
                color="red"
                onClick={() =>
                  this.props.dispatch(
                    deleteDish(dish.id),
                  )
                }>
                Delete
              </Button>
            </Link>
            <Grid.Row>
              <Grid.Column width={16}>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>
                      {dish.dish}
                    </Card.Header>
                    <Card.Meta>
                      ${parseFloat(
                        Math.round(dish.price * 100) /
                          100,
                      ).toFixed(2)}
                    </Card.Meta>
                    <Divider />
                    <Card.Content>
                      {/*<Image src = {d.image}/>*/}
                      --IMAGE NOT FOUND--
                      <Divider />
                    </Card.Content>
                    <Card.Content extra>
                      {dish.description}
                    </Card.Content>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    dish: state.dishes.find(
      (d) => d.id === parseInt(props.match.params.id),
    ),
  };
};

export default connect(mapStateToProps)(MenuView);
