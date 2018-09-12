import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './loginpage.js';

const App = () =>

      <Router>
      <div>

          <Route exact path="/" component={LoginPage} />

      </div>
    </Router>

export default App;
