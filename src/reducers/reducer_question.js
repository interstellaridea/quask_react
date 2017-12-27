import { CREATE_QUESTION, RECEIVED_QUESTION, ANSWER_SUBMITTED } from '../actions/index';

const INITIAL_STATE = { all: [], question: 'Not on right now', answers: null };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
	case CREATE_QUESTION:
    console.log(action.payload);
		return {  all: action.payload.data };
  case RECEIVED_QUESTION:
    return { question: action.payload.question, answers: action.payload.answers };
  case ANSWER_SUBMITTED:
    return state;
	default:
		return state;
	}
}