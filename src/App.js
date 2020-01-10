import React from 'react';
import './App.css';
import CurrentStudents from './components/CurrentStudents'
// import StudentCard from './components/StudentCard'
import { Router, Link } from '@reach/router'
import Home from './components/Home'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Router>
        <CurrentStudents path='CurrentStudents' />
      </Router>
    </div>
  );
}

export default App;
