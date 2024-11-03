import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="side-container">
        <Sidebar />
      </div>
      
      <div className="body-container relative pt-[70px] bg-[#F0F5FF]">
      <Navbar />
      <p className="text-blue-500">Helloworld</p>
      </div>     
    </div>
  );
}

export default App;
