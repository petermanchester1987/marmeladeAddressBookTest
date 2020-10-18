import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';


function App() {
  const title = "Address Book";
  return (
    <BrowserRouter>
    <div className="App">
     
       <Navbar title={title} />
   
    </div>
    </BrowserRouter>
  )
}

export default App;
