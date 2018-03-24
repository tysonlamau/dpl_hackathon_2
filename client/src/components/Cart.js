import React from 'react'
import { connect } from 'react-redux'
import { getDishes } from '../actions/dishes'
import axios from 'axios'
import { updateDish } from '../actions/dishes';


class Cart extends React.Component {

  componentDidMount() {
    this.props.dispatch(getDishes())
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const { dishes } = this.props
    dishes.map((d) => d.incart ? dispatch(updateDish({...d, purchase: d.purchase + 1})) : dispatch(updateDish(d)))
  };

render(){
  const { dishes } = this.props;
  return(
    <div>
      <ul>
        {dishes.map((d) => d.incart ? <li>{d.dish} - {d.price} - {d.purchase} </li> : null )}
      </ul>
      <button onClick={this.handleClick}>Purchase</button>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
}

export default connect(mapStateToProps)(Cart);
