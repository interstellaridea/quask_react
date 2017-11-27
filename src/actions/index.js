import axios from 'axios';

export const CREATE_QUESTION = 'CREATE_QUESTION';


const ROOT_URL = 'https://quask-api.herokuapp.com/questions';

export function createQuestion(question) {
	const request = axios.post(ROOT_URL,question)
	return {
		type: CREATE_QUESTION,
		payload: request
	}
}