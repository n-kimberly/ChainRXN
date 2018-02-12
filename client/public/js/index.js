import React from 'react';
import ReactDOM from 'react-dom';

// import '../css/index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();