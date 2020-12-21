import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<App />,
  document.getElementById('root')
);