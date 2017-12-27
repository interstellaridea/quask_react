import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createQuestion } from '../actions/index';


class AskForm extends Component {

  renderField(field) {
    const {  type, placeholder, meta: { touched, error } } = field;
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
    const { fields, maxShown, meta: { error }} = field;
    return(
      <div className='form-group d-flex flex-column align-items-center'>        
          <button className='btn btn-secondary btn-block mt-3' type='button'onClick={ () => fields.push() }>
            add answer
          </button>
          {
            fields.map((answer, index) => (
              index < maxShown ?
                <div className='form-inline mt-3' key={index}>
                  <Field
                    name={answer}
                    type='text'
                    component={this.renderField}
                    placeholder={`Answer ${index + 1}`}
                   />
                  <button className='btn btn-danger' type='button' onClick={ () => fields.remove(index) }>
                    <span className="oi oi-trash" />
                  </button>
              </div> : null
          ))}
        
      </div>
    );
  }

  onSubmit(values) {
    
    const question_hash = {};
    question_hash['question'] = {name: values['question'], answers_attributes: values['answers'].map(item => ({name: item})) };
    this.props.createQuestion(question_hash, () => {
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

        <FieldArray maxShown={4} name='answers' component={this.renderAnswerForQuestions.bind(this)} />

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







