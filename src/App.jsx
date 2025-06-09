// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/navbar';
import LandingPage from './landingPage/landingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="pt-16"> {/* Adjust padding-top to accommodate fixed navbar */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
