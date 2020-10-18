import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';


function App() {
  return (
     /* Wrapping everything in a browser router component so that I can then
      put in a Switch and two Routes to either show the form entry page
      or the added addresses */
       /* Added a Nav component for both pages so you can switch between the two */
       /* Added an alert component so I can show alerts when adding an address */
    <BrowserRouter>
    
    <div className="App">
     
    
       <Navbar />


   
    </div>
    </BrowserRouter>
  )
}

export default App;
