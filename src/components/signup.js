import React, { Component } from 'react';
import Form from './form';

class SignUp extends Component {
  render() {
    const fields = ['First Name', 'Last Name', 'Unit Number', 'Email', 'Password', 'Confirm Password'];
    return <main>
      <Form name='Create Account' fields={fields}/>
      <p className='fine-print'>Already have an account? <a href='/'>Sign In!</a></p>
    </main>;
  }
}

export default SignUp;