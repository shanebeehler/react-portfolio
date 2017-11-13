import './index.css';
import React                                     from 'react';
import ReactDOM                                  from 'react-dom';
import App                                       from './App';
import registerServiceWorker                     from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider }                              from 'react-redux'
import rootReducer                               from './reducers/index'
import thunkMiddleware                           from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState   = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const { faves }        = persistedState;
const store            = createStore(rootReducer, { faves }, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
