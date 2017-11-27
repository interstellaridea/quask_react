import React, { Component } from 'react';

class Ask extends Component {

  constructor(props) {
    super(props);
    this.state = { input: 'Ask a question...' };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFocus(){
    this.setState({ input: '' });
  }

  onInputChange(e){
    this.setState({ input: e.target.value });
  }

  handleClick(){
    alert('submitting question:' + this.state.input);
  }

  render() {
    return(
      <div className='question-field'>
        <p>Ask a Question:</p>
        <form className='form-group'>
        <input
          className='form-control'
          type="text"
          value={ this.state.input }
          onFocus={ this.handleFocus }
          onChange={ this.onInputChange } />
        <input
          className="question-button form-control"
          type='submit' value='ask'
          onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default Ask;