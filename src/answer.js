import React, { Component } from 'react';
import QuestionConnection from './question_connection';

class Answer extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<QuestionConnection />
				<p>answers component rendered</p>
			</div>
		);
	}
}

export default Answer;