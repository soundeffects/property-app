import React, { Component } from 'react';

class BasicField extends Component {
  findType(str) {
    const string = str.toLowerCase();
    if (string === 'sign in' || string === 'create account') { return 'submit' }
    else if (string.includes('password')) { return 'password' }
    else if (string.includes('email')) { return 'email' }
    else if (string.includes('number')) { return 'number' }
    else { return 'text' }
  }
  
  renderContent(label) {
    if (this.findType(label) === 'submit') {
      return <button type='submit' {...this.props.input}>
        { label }
      </button>;
    } else {
      return <div className='field'>
        <label>{ label }</label>
        <input type={ this.findType(label) } {...this.props.input}/>
      </div>;
    }
  }
  
  render() {
    return this.renderContent(this.props.label);
  }
}

export default BasicField;