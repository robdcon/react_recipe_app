import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import RecipeCard from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipeCard />, document.getElementById('root'));
registerServiceWorker();
