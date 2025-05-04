import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PCList from './components/PCList'; // Example component
import Navbar from './components/Navbar'; // Example component
import './App.css'; // Optional styling

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PCList />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;