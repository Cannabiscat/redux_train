import React, { Component, PropTypes } from 'react';

export default class User extends Component {

  render() {

    const { name, error } = this.props;
    let template;
    
    if (name) {
      template = <p>Привет, { name }!</p>
    } else {
      template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
    }
    return <div className='ib user'>
      { template }
      { error ? <p className='error'>{ error }.<br/>Попробуйте ещё раз </p> : '' }
    </div>
  }
}

User.PropTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
