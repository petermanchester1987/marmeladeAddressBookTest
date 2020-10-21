import React, { useContext, useCallback, useState, Fragment } from "react";
import PropTypes from "prop-types";
import ManualAddresses from './ManualAddresses';
import AddressContext from '../../context/addresses/addressContext';
import { debounce } from 'throttle-debounce';


const Search = () => {

  const [showAddressOptions, setAddressOptions ] = useState(false);

  //Bringing in context into the component
  const addressContext = useContext(AddressContext); 
    // Destructuring the context
  const { 
    name,
    setName,
    searchPostcode,
    postcode,
    postcodes,
    addresses,
    setPostcode,
    searchAddress,
    setAddress,
    seeManual,
    showManual

   } = addressContext;

  // using useCallback hook to debounce the postcode search
  // Didn't realise until this that it was slightly different to debounce 
  // or throttle a functional component than a class based (because each 
  // render it has a new state )

   const debounceFunc = 
   useCallback(debounce(1000, (nextValue) => searchPostcode(nextValue)),[]);

    const handlePostcodeChange = e => {
      const nextValue = e.target.value;
      debounceFunc(nextValue);
      setPostcode(nextValue);
    }

    const handlePostcodeSelect = postcode => {
      const searchablePostcode = postcode.replace(/\s+/g, '');
      searchAddress(searchablePostcode);
    }
   
    const handleAddressSelect = e => {
      const addressArray = e.target.value.split(',');
      setAddress(addressArray);
    }

  const onSubmit = (e, postcode) => {
    e.preventDefault();
    handlePostcodeSelect(postcode);
    setAddressOptions(true);
    showManual();
  };

  return (
    <div className="container">
      <form onSubmit={e => onSubmit(e, postcode)} action="" className="form">
        <input
          type="text"
          name="contact"
          placeholder="Enter New Address Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         
         <input
          type="text"
          name="quickform"
          list="postcode-array"
          placeholder="Enter Postcode"
          onChange={e => handlePostcodeChange(e)}
          
        /> 

        { !seeManual && (
             <input
             type="submit"
             className="btn btn-dark btn-block"
             value="Add Address Quickly"
           />
        )}
       
        
        
        
        {postcodes.result && (
          <datalist id="postcode-array">
          {postcodes.result.map((postcode) => {
            return (
              <option value={postcode} key={postcode}></option>
            );
          })}
        </datalist>
        )}
        

        {/* {postcodes.result && (
        <div className="container">
           <label htmlFor="postcode">Choose The Postcode</label>
        <input onSelect={e => handlePostcodeSelect(e)} type="data-list" name="postcode" list="postcode-array"></input>
        <datalist id="postcode-array">
          {postcodes.result.map((postcode) => {
            return (
              <option value={postcode} key={postcode}></option>
            );
          })}
        </datalist>
        </div>
        )} */}

        {showAddressOptions && (
        <div className="container">
           <label htmlFor="address">Choose The Address</label>
        <input onSelect={e => handleAddressSelect(e)} type="data-list" name="address" list="address-array"></input>
        <datalist id="address-array">
          {addresses.map((address) => {
            return (
              <option value={address} key={address}></option>
            );
          })}
        </datalist>
        </div>
        )}
        </form>

        
        
        
            <ManualAddresses />
        
      
      
    </div>
  );
};

Search.propTypes = {
  
  setAlert: PropTypes.func.isRequired,
};

export default Search;