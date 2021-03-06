import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/icono.css';
import App from './components/App';
// Para el uso de redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';


const store = createStore(
  reducers, //Todos los reducers
  {},  //Estado inicial
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
