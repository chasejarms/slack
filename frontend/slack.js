import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

// for testing only

import { requestGroupCreation } from './actions/groups_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser , errors: []} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
});
