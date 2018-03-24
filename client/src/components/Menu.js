import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Segment,
  Header,
  Grid,
  Card,
  Divider,
  Button,
  Form,
} from 'semantic-ui-react';
import DishForm from './DishForm';
import { updateDish } from '../actions/dishes';

class Menu extends React.Component {
  state = { showForm: false, search: '' };

  toggleForm = () => {
    this.setState((state) => {
      return { showForm: !state.showForm };
    });
  };

  handleClick = (d) => {
    const { dispatch } = this.props;
    console.log(d.views)
    let dish = { ...d, incart: !d.incart, views: d.views + 1 };
    dispatch(updateDish(dish));
  };

  handleViewClick = (d) => {
    const { dispatch } = this.props;
    console.log(d.views)
    let dish = { ...d, views: d.views + 1 };
    dispatch(updateDish(dish));
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { showForm } = this.state;
    const { dishes } = this.props;
    return (
      <Container textalign="center">
        <Segment inverted>
          <Header
            as="h3"
            size="huge"
            textAlign="center"
            inverted
            color="blue">
            Menu
          </Header>
        </Segment>
        <Divider hidden />
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
            <Divider hidden />
            <Grid>
              <Grid.Row>
                {dishes.map(
                  (d) =>
                    d.dish
                      .toLowerCase()
                      .includes(
                        this.state.search.toLowerCase(),
                      ) ? (
                      <Grid.Column width={4}>
                        <Card key={d.id}>
                          <Card.Content>
                            <Card.Header>
                              {d.dish}
                            </Card.Header>
                            <Card.Meta>
                              ${parseFloat(
                                Math.round(
                                  d.price * 100,
                                ) / 100,
                              ).toFixed(2)}
                            </Card.Meta>
                            <Divider />
                            <Card.Content>
                              {/*<Image src = {d.image}/>*/}
                              --IMAGE NOT FOUND--
                            </Card.Content>
                          </Card.Content>
                          <Link to={`/menu/${d.id}`}>
                            <Button fluid color="blue" onClick={() => this.handleViewClick(d)}>
                              View Dish
                            </Button>
                          </Link>
                          <Button
                            onClick={() =>
                              this.handleClick(d)
                            }>
                            {d.incart ? (
                              <p>Remove From Cart</p>
                            ) : (
                              <p>Add to Cart</p>
                            )}
                          </Button>
                        </Card>
                      </Grid.Column>
                    ) : null,
                )}
              </Grid.Row>
            </Grid>
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
