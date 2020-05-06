/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Sidebar from './components/pages/sidebar';
import Routing from './routes';

function App() {
  return (
    <div className="App">
      <div id="colorlib-page">
        <div className="container-wrap">
          <Router>
            <Sidebar />
            <Routing />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
