import React, { Component } from 'react';

class Form extends Component {
  findType(str) {
    const string = str.toLowerCase();
    if (string.includes('password')) { return 'password' }
    else if (string.includes('email')) { return 'email' }
    else if (string.includes('number')) { return 'number' }
    else { return 'text' }
  }
  
  render() {
    return <form>
      { this.props.fields.map(field => <div className='field'>
        <label>{ field }</label>
        <input type={ this.findType(field) }/>
      </div>) }
      <button className={'placeholder'} type='submit'>{ this.props.name }</button>
    </form>;
  }
}

export default Form;