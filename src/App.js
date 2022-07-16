import React from 'react'
import Listing from './Components/Listing';
import './styles/App.css';
import etsy from './data/etsy';

function App() {

  return (
    <div className="App">
      <Listing items={etsy} />
    </div>
  );
}

export default App;
