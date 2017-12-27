import React, { Component } from 'react';
import QuestionConnection from '../connections/question_connection';

class Answer extends Component {

	render(){
		return(
			<div className='d-flex flex-column align-items-center'>
				<QuestionConnection />
			</div>
		);
	}
}

export default Answer;