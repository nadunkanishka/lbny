import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
