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

  componentDidMount() {
    const { dishes } = this.props;
    var found = false;
    for(var i = 0; i < dishes.length; i++) {
      if (dishes[i].incart) {
        this.setState({found: true})
        break;
      }
    }
    this.props.dispatch(getDishes());
  }
  componentWillReceiveProps(){
    const { dishes } = this.props;
    console.log(dishes)
    for(var i = 0; i < dishes.length; i++) {
      if (dishes[i].incart) {
        this.setState({found: true})
        break;
      }
    }
  }

  handleClick = (d) => {
    const { dispatch } = this.props;
    let dish = { ...d, incart: !d.incart };
    dispatch(updateDish(dish));
    this.checkCart();
  };

  handlePurchaseClick = (d) => {
    const { dispatch } = this.props;
    const { dishes } = this.props
    dishes.map((d) => d.incart ? dispatch(updateDish({...d, purchase: d.purchase + 1, incart: !d.incart})) : dispatch(updateDish(d)))
    this.setState({ showComplete: !this.state.showComplete, found: false })
  };

  checkCart = () => {
    const { dishes } = this.props
    for(var i = 0; i < dishes.length; i++) {
      if (dishes[i].incart) {
        this.setState({found: true})
        break;
      }
    }
  }

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
        { this.state.found ?
         (this.state.showComplete ? <p>Your Order Was Procesed</p> : <Button onClick={this.handlePurchaseClick}>Purchase</Button>)  :
        "Cart Empty" }
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
                          --IMAGE NOT FOUND--
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
