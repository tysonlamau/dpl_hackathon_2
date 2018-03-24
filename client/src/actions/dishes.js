import axios from 'axios';

export const DISHES = 'DISHES';
export const ADD_DISH = 'ADD_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const DELETE_DISH = 'DELETE_DISH';

export const getDishes = (callback) => {
  return (dispatch) => {
    axios
      .get('/api/dishes/')
      .then((res) =>
        dispatch({
          type: DISHES,
          dishes: res.data,
        }),
      )
      .then(callback);
  };
};

export const addDish = (dish) => {
  return (dispatch) => {
    axios.post('/api/dishes/', { dish }).then((res) =>
      dispatch({
        type: ADD_DISH,
        dish: res.data,
      }),
    );
  };
};

export const updateDish = (dish) => {
  return (dispatch) => {
    axios
      .put(`/api/dishes/${dish.id}`, { dish })
      .then((res) =>
        dispatch({
          type: UPDATE_DISH,
          dish: res.data,
        }),
      );
  };
};

export const deleteDish = (dish_id) => {
  return (dispatch) => {
    axios
      .delete(`/api/dishes/${dish_id}`)
      .then((res) =>
        dispatch({
          type: DELETE_DISH,
          dish_id,
        }),
      );
  };
};
