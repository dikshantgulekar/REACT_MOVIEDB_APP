import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Provider } from 'react-redux';
import mystore from './component/Redux/mystore';
import './App.css'

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <Provider store={mystore}>
  <Router>
      <App/>
  </Router>
  </Provider>
);
