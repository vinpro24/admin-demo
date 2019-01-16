import React from 'react';
import ReactDOM from 'react-dom';
import 'masonry-layout';

import App from './App';
import 'bootstrap';
//import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/dropdown';

import './assets/static/js/jvectormap/jquery-jvectormap.min.js';
import './assets/static/js/jvectormap/jquery-jvectormap.css';
import './assets/static/js/jvectormap/jquery-jvectormap-world-mill.js';

ReactDOM.render(<App />, document.getElementById('app'));
