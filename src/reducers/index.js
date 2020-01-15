import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { messagesReducer } from './messagesReducer';

const rootReducer = combineReducers({
  user,
  errorMsg,
  message: messagesReducer
});

export default rootReducer;
