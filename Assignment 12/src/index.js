import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './Product';
import * as serviceWorker from './ServiceWorker';


ReactDOM.render(<Product />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

