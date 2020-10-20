import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import AddressContext from '../../context/addresses/addressContext';

const Search = () => {

  const addressContext = useContext(AddressContext); 
  
  const { 
    name,
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
    setName,
    setLineOne,
    setLineTwo,
    setTown,
    setCounty,
    setPostcode,
    setTelephone,
    setEmail,
    searchPostcode } = addressContext;


  const showAddress = () => {
    console.log(showManual);
  }
  

  const onChange = (e) => {
    
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
          name="name"
          placeholder="Enter Address Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          name="address1"
          placeholder="Enter Address Line 1"
          value={address1}
          onChange={e => setLineOne(e.target.value)}
        />
        <input
          type="text"
          name="address2"
          placeholder="Enter Address Line 2"
          value={address2}
          onChange={e => setLineTwo(e.target.value)}
        />
        <input
          type="text"
          name="town"
          placeholder="Enter Town/City"
          value={town}
          onChange={e => setTown(e.target.value)}
        />
        <input
          type="text"
          name="county"
          placeholder="Enter County"
          value={county}
          onChange={e => setCounty(e.target.value)}
        />

        <input
          type="text"
          name="postcode"
          placeholder="Enter Postcode"
          value={postcode}
          onChange={e => setPostcode(e.target.value)}
        />
       
        <input
          type="text"
          name="telephone"
          placeholder="Add Telephone"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Add Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Submit"
        />
    </div>
  );
};

Search.propTypes = {
  
};

export default Search;