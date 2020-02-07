/**
 * index.js
 * Entry file for webpack bundler
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Components
import App from './App';

// Stylesheets
import './stylesheets/main.less';

render(<App />, document.getElementById('root'))