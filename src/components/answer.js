import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { submitAnswer, receivedQuestion } from '../actions/index';
import QuestionConnection from '../connections/question_connection';

class Answer extends Component {

  handleSubmit(answer){
    const answer_hash = { response: { user_id: 1 , answer_id: answer.id }};
    this.props.submitAnswer( answer_hash, () => this.props.history.go(0) ); // history.go moves the pointer in the history stack, 0 is a refresh
  }

  renderAnswers(answer) {
    return (
      <li key={answer.id} onClick={ this.handleSubmit.bind(this, answer) } className='list-group-item list-group-item-action'>{ answer.name }</li>
    );
  }

	render(){
		return(
			<div className='d-flex flex-column align-items-center'>
				<QuestionConnection />
        <div>
          <h2>{ this.props.question.name }</h2>
          <ul className='list-group text-center'>{ _.map(this.props.answers, answer => this.renderAnswers(answer) ) }</ul>
        </div>
			</div>
		);
	}
}

function mapStateToProps({ received_question }) {
  return { question: received_question.question, answers: received_question.answers };
}


export default connect(mapStateToProps, { submitAnswer, receivedQuestion })(Answer);