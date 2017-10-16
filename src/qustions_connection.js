import React, { Component, PropTypes } from 'react'
import ActionCable from 'actioncable'

class QuestionConnection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question: {
				id: 0,
				name: 'We are not connected'
			}
		}; 
	}

	createSocket(){
		let cable = ActionCable.createConsumer('ws://192.168.1.8:3000/cable')
		this.chats = cable.subscriptions.create({
			channel: 'QuestionsChannel'
		},
		{
			connected: () => {},
			receieved: (data) => {
				this.setState({question: data.name})
			},
			create: (chatContent) => {}
		})
	}

	componentWillMount() {
		this.createSocket();
	}

	render() {
		return(
			<p>{this.state.question.name}</p>
		)
	}

}

export default QuestionConnection;
