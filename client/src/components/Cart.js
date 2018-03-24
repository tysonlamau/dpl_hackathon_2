import React from 'react'
import { connect } from 'react-redux'
import { getDishes } from '../actions/dishes'
import axios from 'axios'

class Cart extends React.Component {

  componentDidMount() {
    this.props.dispatch(getDishes())
  }

render(){
  const { dishes } = this.props;
  return(
    <div>
      <ul>
        {dishes.map((res) => res.incart ? <li>{res.dish} - {res.price}</li> : null )}
      </ul>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { dishes: state.dishes };
}

export default connect(mapStateToProps)(Cart);
