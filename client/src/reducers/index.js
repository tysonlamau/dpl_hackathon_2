import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import dishes from './dishes';
import cart from './cart';

const rootReducer = combineReducers({
  user,
  flash,
  dishes,
  cart,
});

export default rootReducer;
