import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import manageUsers from './reducers/manageUsers'
import {createStore} from 'redux';
import App from './App';
// add imports and code

const store = createStore(manageUsers)
ReactDOM.render(
  <Provider store={store}>
  <App />

  </Provider>,
  
 
  document.getElementById('root')
);
