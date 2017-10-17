import React, { Component } from 'react';

class Ask extends Component {

  constructor(props) {
    super(props);
    this.state = { input: 'Ask a question...' };
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    console.log(e);
  }

  handleClick(){
    console.log('Handle that click!');
    // console.log(this.state.input);
  }

  render() {
    return(
      <div>
        <p>Ask a Question:</p>
        <input
          type="text"
          value={this.state.input}
          onChange={ this.onInputChange }  />
        <input type="button" value="Ask!" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Ask;