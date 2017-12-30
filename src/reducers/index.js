import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import questionReducer from './reducer_question';

const rootReducer = combineReducers({
  form: formReducer,
  received_question: questionReducer
});

export default rootReducer;