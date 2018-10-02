import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomRouter from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomRouter />, document.getElementById('root'));
registerServiceWorker();
