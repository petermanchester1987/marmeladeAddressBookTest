import React, { useState, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// bringing in state wrapper from context
import AddressState from './context/addresses/AddressState';
import './App.css';
import Navbar from './components/layout/Navbar';
import AddAddresses from './components/addresses/AddAddresses';
import AddressList from './components/addresses/AddressList';


function App() {

  const [alert, setAlert] = useState(null);


  //Add Simple Alert to parent app 
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };


  return (
     /* Wrapping everything in a browser router component so that I can then
      put in a Switch and two Routes to either show the form entry page
      or the added addresses */
       /* Added a Nav component for both pages so you can switch between the two */
       /* Added an alert component so I can show alerts when adding an address */
    <AddressState>
    <BrowserRouter>
    
    <div className="App">
     
    
       <Navbar />

       <Switch>
       <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <AddAddresses
                    setAlert={showAlert}
                  />
                </Fragment>
              )}
            />

            <Route exact path="/addresses" 
            render={(props) => (
                <Fragment>
                  <AddressList />
                </Fragment>
              )} />

       </Switch>


   
    </div>
    </BrowserRouter>
    </AddressState>
  )
}

export default App;
