import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import './assets/scss/menu.scss';
import './assets/scss/auth.scss';
import './assets/scss/search.scss';
import './assets/scss/footer.scss';
import './assets/scss/forgotPassword.scss';


ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
