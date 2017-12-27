import axios from 'axios';

// leave this on line 4 for tom
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const RECEIVED_QUESTION = 'RECEIVED_QUESTION';
export const ANSWER_SUBMITTED = 'ANSWER_SUBMITTED';

const POST_QUESTION_URL = 'https://quask-api.herokuapp.com/questions';
const SUBMIT_ANSWER_URL = 'https://quask-api.herokuapp.com/responses';

export function createQuestion(question_hash, callback) {
	const request = axios.post( POST_QUESTION_URL, question_hash )
    // the callback is is to redirect user to new websocket see components/ask.js
    .then( () => callback() );
    return { type: CREATE_QUESTION, payload: request.data };
}

// export function receivedQuestion(received_hash) {
//   return { type: RECEIVED_QUESTION, payload: received_hash };
// }

export function submitAnswer(answer_hash, callback) {
  const request = axios.post(SUBMIT_ANSWER_URL, answer_hash )
        .then( () => console.log(`answer submitted`)// callback here  );
    return { type: ANSWER_SUBMITTED, payload: request.data };
} 