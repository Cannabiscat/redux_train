import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageAction from '../actions/PageAction';
import * as userAction from '../actions/UserActions';

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { getPhotos } = this.props.pageAction;
    const { handleLogin } = this.props.userAction;

    return <div className='row'>
      <Page year = { page.year } photos = { page.photos } getPhotos = { getPhotos } error= { page.error } fetching={ page.fetching }/>
      <User name={ user.name } handleLogin= { handleLogin } error= { user.error }/>
    </div>
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageAction: bindActionCreators(pageAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
