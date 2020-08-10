import React from 'react';
import Navbar from './components/navbar'
import HomeContent from './components/HomeContent'
import Data from './components/Data'
import Results from './components/Results'
import About from './components/About'

import './CSS/AllStyle.css'

function App() {

  // window.addEventListener("wheel", function(e){
  //   e.preventDefault();
  // }, 
  // {
  //   passive: false
  // });
  return (
    <div className="App">
      <Navbar/>
      <HomeContent/>
      <Data/>
      <Results/>
      <About/>
    </div>
  );
}

export default App;
