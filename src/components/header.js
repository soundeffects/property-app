import React, { Component } from 'react';

class Header extends Component {
  render() {
    return [<header>
      <h1>Welcome to HOA Manager.</h1>
      <p>Login to continue.</p>
    </header>,
    this.props.children];
  }
}

export default Header;