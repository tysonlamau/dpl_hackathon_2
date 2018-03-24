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
  componentDidMount() {
    this.props.dispatch(getDishes());
  }

  handleClick = (d) => {
    const { dispatch } = this.props;
    let dish = { ...d, incart: !d.incart };
    dispatch(updateDish(dish));
  };

  render() {
    const { dishes } = this.props;
    return (
      <Container textalign="center">
        <Segment inverted>
          <Header
            as="h3"
            size="huge"
            textAlign="center"
            inverted
            color="purple">
            Your Cart
          </Header>
        </Segment>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            {dishes.map(
              (d) =>
                d.incart ? (
                  <Grid.Column width={4}>
                    <Card key={d.id}>
                      <Card.Content>
                        <Card.Header>
                          {d.dish}
                        </Card.Header>
                        <Card.Meta>
                          ${parseFloat(
                            Math.round(d.price * 100) /
                              100,
                          ).toFixed(2)}
                        </Card.Meta>
                        <Divider />
                        <Card.Content>
                          {/*<Image src = {d.image}/>*/}
                          --insert image here--
                          <Divider />
                        </Card.Content>
                      </Card.Content>
                      <Button color="purple">
                        View Dish
                      </Button>
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(Cart);
