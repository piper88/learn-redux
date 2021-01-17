import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//webpack knows to look for index.js file within reducers directory, don't hve to add it in explicitly
import allReducers from './reducers';

//create store, pass reducer into store (if only one). If more than one, combine reducers first, then pass combinedReducers into store
const store = createStore(allReducers,
  //Redux Chrome devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//wrap the app in Provider, which allows React and Redux to connect, pass store to Provider
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//index.js
//create store
  //store holds all the data
//pass reducer into store
  //reducer makes changes to the state based on the action it sees was done

//component
//dispatch actions

//dispatch sends the action to the reducer, the reducer checks what it's supposed to do and updates the store accordingly
