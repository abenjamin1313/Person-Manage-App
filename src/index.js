import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Adams Person Manage App" />, document.getElementById('root'));
registerServiceWorker();
