import React, { Component, PropTypes } from 'react';
import ActionCable from 'actioncable'
import { submitAnswer } from '../actions/index';

// uncomment when ready to add to root reducer
// import { connect } from 'react-redux';
// import questionReducer from '../reducers/reducer_question';

class QuestionConnection extends Component {

	constructor(props) {
		super(props);
		this.state = { question: {id: null, name:'We are not connected'}, answers: [] };
	}

  createSocket(){
    let cable = ActionCable.createConsumer('ws://quask-api.herokuapp.com/cable')
    this.chats = cable.subscriptions.create({
      channel: 'QuestionsChannel'
    },
    {
      connected: () => {
        console.log('ActionCable Connected!');
      },
      received: (data) => {
        
        //uncomment for connecting to root reducer
        // receivedQuestion(data);

        this.setState({
          question: data.question,
          answers: data.answers
        });

      },
      create: (chatContent) => {}
    })
  }

  handleSubmit(answer){
    submitAnswer( { response: { user_id: 1 , answer_id: answer.id } } );
    // redirect callback () => this.context.history.push('/answer') 
  }

  renderAnswers() {
    const answer_list = this.state.answers.map( answer =>
      <li onClick={this.handleSubmit.bind(this, answer)} className='list-group-item list-group-item-action' key={answer.id}>
        {answer.name}
      </li>
    );
    return answer_list;
  }

  componentWillMount() {
    this.createSocket();
  }

	render() {
		return(
      <div>
  			<h2>{this.state.question.name }</h2>
        <ul className='list-group text-center'>{this.renderAnswers() }</ul>
      </div>
    );
	}

}


// un comment when connecting to root reducer
// function mapStateToProps({ received_question }) {
//   return { question: received_question.question, answers: received_question.answers };
// }
// export default connect(mapStateToProps, {submitAnswer, receivedQuestion})(QuestionConnection);
export default QuestionConnection;





