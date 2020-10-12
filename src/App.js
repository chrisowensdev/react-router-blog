import React from 'react';

// Importing my components
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Blog />
      <About />
    </div>
  );
}

export default App;
