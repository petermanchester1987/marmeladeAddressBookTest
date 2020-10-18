import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import SearchAddresses from './SearchAddresses';
import ManualAddresses from './ManualAddresses';
import AddressContext from '../../context/addresses/addressContext';

const Search = ({  setAlert }) => {

  const addressContext = useContext(AddressContext); 

  const { 
    setName,
    
    searchPostcode

   } = addressContext;
  

   const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}
   
  

  const onSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter New Address Name"
         
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         <input
          type="text"
          name="quickform"
          placeholder="Enter Postcode"
          onChange={e => debounce(searchPostcode, 300)}
        />

        Or
        
        
            <ManualAddresses />
        
      </form>
      
    </div>
  );
};

Search.propTypes = {
  
  setAlert: PropTypes.func.isRequired,
};

export default Search;