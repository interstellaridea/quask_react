import { Component } from 'react';
import ActionCable from 'actioncable'
import { connect } from 'react-redux';
import { receivedQuestion } from '../actions/index';

class QuestionConnection extends Component {

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
        this.props.receivedQuestion(data);
      },
      create: (chatContent) => {}

      })
  }

  componentDidMount() {
    this.createSocket();
  }

  render() {
    return(null);
  }

}

export default connect(null, { receivedQuestion })(QuestionConnection);