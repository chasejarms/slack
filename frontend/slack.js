import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// for testing only

import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // for testing only

  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;

  let store;
  if (window.current_user) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
});
