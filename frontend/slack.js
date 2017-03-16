import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// for testing only

import * as APIUtil from './util/api_util';
import { fetchMessages } from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // for testing only

  window.fetchMessages = fetchMessages;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser , errors: []} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});
