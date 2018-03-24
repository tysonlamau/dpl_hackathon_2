import {
  DISHES,
  ADD_DISH,
  UPDATE_DISH,
  DELETE_DISH,
} from '../actions/dishes';

const dishes = (state = [], action) => {
  switch (action.type) {
    case DISHES:
      return action.dishes;
    case ADD_DISH:
      return [action.dish, ...state];
    case UPDATE_DISH:
      return state.map((d) => {
        if (d.id === action.dish.id) {
          return action.dish;
        }
        return d;
      });
    case DELETE_DISH:
      return state.filter((d) => d.id !== action.id);
    default:
      return state;
  }
};

export default dishes;
