import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import App from './App';
import DebugInfo from './DebugInfo';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
      <DebugInfo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
