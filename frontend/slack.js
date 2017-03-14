import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// for testing only

import * as APIUtil from './util/api_util';
import { requestGroups } from './actions/groups_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // for testing only

  window.requestGroups = requestGroups;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});
