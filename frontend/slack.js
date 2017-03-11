import React from 'react';
import ReactDOM from 'react-dom';


// components to import
import App from './components/app';
import Home from './components/home/home';
import Chat from './components/chat/chat';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';


document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');

  if (window.current_user) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    // const store = configureStore(preloadedState);
  } else {
    // const store = configureStore();
  }

  ReactDOM.render(<Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="chat" component={Chat}></Route>
    </Route>
  </Router>, main);
});
