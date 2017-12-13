import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createQuestion } from '../actions/index';


class AskForm extends Component {

  renderField(field) {
    const {  type, placeholder, meta: { touched, error } } = field;
    const classes = `form-group ${touched && error ? 'has-danger' : ''}`;
    return(
      <div>
        <input
          className='form-control'
          name={field.name}
          type={type}
          placeholder={placeholder}
          {...field.input}
        />
        <div className='text-help'>{touched ? error : '' }</div>
      </div>
    );  
  }

  renderAnswerForQuestions(field){
    const { fields, meta: { error }} = field;
    return(
      <div className='form-group d-flex flex-column align-items-center'>        
          <button className='btn btn-secondary btn-block mt-3' type='button'onClick={ () => fields.push() }>
            add answer
          </button>
          { fields.map((answer, index) => (
            <div className='form-inline' key={index}>
              <Field
                name={answer}
                type='text'
                component={this.renderField}
                placeholder={`Answer ${index + 1}`}
               />
              <button className='btn btn-danger' type='button' onClick={ () => fields.remove(index) }>
                <span className="oi oi-trash" />
              </button>               
            </div>
          ))}
        
      </div>
    );
  }

  onSubmit(values) {
    // reduxForm stores as { question: 'name', answer: [ 'str'. 'str'] }
    // map to make:
    // { question: {'naem': 'str'}, answers: [ {'name': 'str'}, {'name': 'str'} ] }
    const fixed = {};
    fixed['question'] = {name: values['question']};
    fixed['answers'] = values['answers'].map(item => ({name: item}))
    this.props.createQuestion(fixed, () => {
      // redirect users to answers on success post
      this.props.history.push('/answer');
    });
  }

 render() {
  const { handleSubmit } = this.props;
  return (
    <div className='d-flex flex-column align-items-center'>
      <form className='col-5' onSubmit={ handleSubmit( this.onSubmit.bind(this)) }>
        <Field
          name='question'
          type='text'
          placeholder='Question'
          component={this.renderField}
        />

        <FieldArray name='answers' component={this.renderAnswerForQuestions.bind(this)} />

        <button className='btn btn-info btn-block' type='submit'>Submit </button>
      </form>
    </div>
  );
 }
}

function validate(values) {
  const errors = {};
  if (!values.question) {
    errors.question = 'Please enter a question!';
  }
  return errors;
}

export default reduxForm({ form: 'askQuestForm', validate})( connect(null, {createQuestion})(AskForm));







