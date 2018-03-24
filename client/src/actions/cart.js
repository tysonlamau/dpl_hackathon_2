import axios from 'axios';

export const CART = 'CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const getCart = () => {
  return (dispatch) => {
    axios.get('/api/carts').then((res) => {
      dispatch({
        type: CART,
        cart: res.data,
      });
    });
  };
};

export const addToCart = (dish) => {
  return (dispatch) => {
    axios.post('/api/carts/', { dish }).then((res) =>
      dispatch({
        type: ADD_TO_CART,
        dish: res.data,
      }),
    );
  };
};
