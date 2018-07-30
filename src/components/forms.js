import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import BasicField from './field';

class Form extends Component {
  render() {
    return <form>
      { this.props.fields.map((field, index) => 
          <Field key={index} component={ BasicField } name={ field } label={ field }/>
      )}
    </form>;
  }
}

export function SignInForm() {
  const fields = ['Email', 'Password', 'Sign In'];
  const SignInForm = reduxForm({ form: 'signin' })(Form);
  
  return <main>
    <SignInForm fields={fields}/>
    <div className='fine-print'>
      <Link to='/forgot'>Forgot Password?</Link>
      <Link className='margin-link' to='/signup'>Create a new account</Link>
    </div>
  </main>;
}

export function SignUpForm() {
  const fields = ['First Name', 'Last Name', 'Unit Number', 'Email',
    'Password', 'Confirm Password', 'Create Account'];
  const SignUpForm = reduxForm({ form: 'signup' })(Form);
  
  return <main>
    <SignUpForm fields={fields}/>
    <p className='fine-print'>Already have an account? <Link to='/'>Sign In!</Link></p>
  </main>;
}