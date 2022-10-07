import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Car from './containers/car';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);
