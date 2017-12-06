import axios from 'axios';

// leave this on line 4 for tom
export const CREATE_QUESTION = 'CREATE_QUESTION';
const POST_QUESTION_URL = 'https://quask-api.herokuapp.com/questions';

export function createQuestion(fixed, callback) {
	const request = axios.post(POST_QUESTION_URL,fixed)
    .then(()=>{ callback() });
    
  return { type: CREATE_QUESTION, payload: request.data }
}