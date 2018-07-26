import React, { Component } from 'react';
import Form from './form';

class SignIn extends Component {
  render() {
    const fields = ['Email', 'Password'];
    return <main>
      <Form name="Sign In" fields={fields}/>
      <p className="fine-print">Don't have an account? <a href="/signup">Create one!</a></p>
    </main>;
  }
}

export default SignIn;