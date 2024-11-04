import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Today from './components/Today';
import Upcoming from './components/Upcoming';
import Completed from './components/Completed';
import Important from './components/Important';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="page-container">
      <div className="side-container">
        <Sidebar />
      </div>
      
      <div className="body-container relative pt-[70px] bg-[#F0F5FF]">
          <Navbar />
          <Routes>
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/today" element={<Today />} />
                <Route path="/upcoming" element={<Upcoming />}/>
                <Route path="/completed" element={<Completed />} />
                <Route path="/important" element={<Important />} />
                {/* Add more routes as needed */}
          </Routes>
      </div>     
    </div>
    </Router>
  );
}

export default App;
