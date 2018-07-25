import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <header>
      <h1>Welcome to HOA manager.</h1>
      <p>Login to continue</p>
      { this.props.children }
    </header>;
  }
}

export default Header;