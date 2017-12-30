import { CREATE_QUESTION, RECEIVED_QUESTION, ANSWER_SUBMITTED } from '../actions/index';

const INITIAL_STATE = { question: {name: 'Debug test', id: 150}, answers: [{id:1, name: 'test answer'}] };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {

	case CREATE_QUESTION:
		return state;

  case RECEIVED_QUESTION:
    return { question: action.payload.question, answers: action.payload.answers };

  case ANSWER_SUBMITTED:
    return state;

	default:
		return state;
	}
}