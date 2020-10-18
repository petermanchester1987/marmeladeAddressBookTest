import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import SearchAddresses from './SearchAddresses';
import ManualAddresses from './ManualAddresses';
import AddressContext from '../../context/addresses/addressContext';

const Search = ({  setAlert }) => {

  const addressContext = useContext(AddressContext); 
  

  const onChange = (e) => {
    setText({[e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a Post Code", "light");
    } else {
      addressContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter New Address Name"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         <input
          type="text"
          name="quickform"
          placeholder="Enter Postcode"
          value={text}
          onChange={onChange}
        />

        Or
        
        
            <ManualAddresses manual={manual} setManual={setManual} />
        
      </form>
      
    </div>
  );
};

Search.propTypes = {
  
  setAlert: PropTypes.func.isRequired,
};

export default Search;