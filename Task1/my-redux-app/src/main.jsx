import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://mithril-rem.fly.dev/api';

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
