import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import SearchAddresses from './SearchAddresses';
import ManualAddresses from './ManualAddresses';
import AddressContext from '../../context/addresses/addressContext';
import { throttle } from 'throttle-debounce';

const Search = ({  setAlert }) => {

  const addressContext = useContext(AddressContext); 

  const { 
    setName,
    
    searchPostcode

   } = addressContext;

   const throttleFunc = throttle(3000, (e) => {
     searchPostcode(e.target.value)
   } )

//    const debounce = (fn, delay) => {
//     let timer = null;
//     return function (...args) {
//         const context = this;
//         timer && clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args);
//         }, delay);
//     };
// }
  

//    const debouncedSearch = (postcode) => {
//       debounce(searchPostcode(postcode), 300)
//    }
   
   
  

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
         
          onChange={e => setName(e)}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         <input
          type="text"
          name="quickform"
          placeholder="Enter Postcode"
          onChange={throttleFunc}
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