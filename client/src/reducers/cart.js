import { CART, ADD_TO_CART } from '../actions/cart';

const cart = (state = [], action) => {
  switch (action.type) {
    case CART:
      return action.cart;
    case ADD_TO_CART:
      return [action.dish, ...state];
    default:
      return state;
  }
};

export default cart;
