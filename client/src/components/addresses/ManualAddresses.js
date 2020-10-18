import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import AddressContext from '../../context/addresses/addressContext';

const Search = () => {

  const addressContext = useContext(AddressContext); 
  
  const { 
    address1,
    address2,
    town,
    county,
    postcode,
    telephone,
    email,
    contacts,
    loading,
    seeManual,
    showManual,
    searchPostcode } = addressContext;


  const showAddress = () => {
    console.log(showManual);
  }
  

  const onChange = (e) => {
    console.log(e.target.value)
    //setText({[e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    
    }
    

  if(!seeManual) return ( <input
    type="submit"
    className="btn btn-dark btn-block"
    value="Enter Address Info Manually"
    onClick={showManual}
/>)
  return (
    <div className="container">
      
        <input
          type="text"
          name="address1"
          placeholder="Enter Address Line 1"
          value={address1}
          onChange={onChange}
        />
        <input
          type="text"
          name="address2"
          placeholder="Enter Address Line 2"
          value={address2}
          onChange={onChange}
        />
        <input
          type="text"
          name="town"
          placeholder="Enter Town/City"
          value={town}
          onChange={onChange}
        />
        <input
          type="text"
          name="county"
          placeholder="Enter County"
          value={county}
          onChange={onChange}
        />

        <input
          type="text"
          name="postcode"
          placeholder="Enter Postcode"
          value={postcode}
          onChange={onChange}
        />
       
        <input
          type="text"
          name="telephone"
          placeholder="Add Telephone"
          value={telephone}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Add Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
    </div>
  );
};

Search.propTypes = {
  
};

export default Search;