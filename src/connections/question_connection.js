import React, { Component, PropTypes } from 'react'
import ActionCable from 'actioncable'

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
        console.log(data);
        this.setState({
          question: data.question,
          answers: data.answers
        });
      },
      create: (chatContent) => {}
    })
  }


  renderAnswers() {
    const answer_list = this.state.answers.map( answer =>
      <li key={answer.id}>
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
        <ul>{this.renderAnswers() }</ul>
      </div>
    );
	}

}

export default QuestionConnection;
