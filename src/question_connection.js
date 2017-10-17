import React, { Component, PropTypes } from 'react'
import ActionCable from 'actioncable'

class QuestionConnection extends Component {

	constructor(props) {
		super(props);
		this.state = { question: 'We are not connected' };
	}

  createSocket(){
    let cable = ActionCable.createConsumer('ws://127.0.0.1:3000/cable')
    this.chats = cable.subscriptions.create({
      channel: 'QuestionsChannel'
    },
    {
      connected: () => {
        console.log('ActionCable Connected!');
      },
      received: (data) => {
        console.log(data);
        this.setState({question: data.question.name});
      },
      create: (chatContent) => {}
    })
  }

  componentWillMount() {
    this.createSocket();
  }

	render() {
		return(
			<h2>{this.state.question}</h2>
		);
	}

}

export default QuestionConnection;
