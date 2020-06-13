import React from 'react';
import { render }from 'react-dom';
import App from './App';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
