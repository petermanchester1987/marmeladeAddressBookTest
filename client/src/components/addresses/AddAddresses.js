import React, { useContext, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import SearchAddresses from './SearchAddresses';
import ManualAddresses from './ManualAddresses';
import AddressContext from '../../context/addresses/addressContext';
import { debounce } from 'throttle-debounce';
import { SET_LINE_ONE, SHOW_MANUAL } from "../../context/constants";


const Search = ({  setAlert }) => {

  const addressContext = useContext(AddressContext); 

  const { 
    setName,
    searchPostcode,
    postcode,
    postcodes,
    addresses,
    setPostcode,
    searchAddress,
    setAddress,
    showManual

   } = addressContext;


   const debounceFunc = 
   useCallback(debounce(1000, (nextValue) => searchPostcode(nextValue)),[]);

    const handlePostcodeChange = e => {
      const nextValue = e.target.value;
      debounceFunc(nextValue);
    }

    const handlePostcodeSelect = e => {
      setPostcode(e.target.value);
      const searchablePostcode = e.target.value.replace(/\s+/g, '');
      searchAddress(searchablePostcode);
    }

    const handleAddressSelect = e => {
      console.log(e.target.value)

      const addressArray = e.target.value.split(',');
      console.log(addressArray);

     setAddress(addressArray);
     
     
    }



  
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="contact"
          placeholder="Enter New Address Name"
         
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         
         <input
          type="text"
          name="quickform"
          list="postcode-array"
          placeholder="Enter Postcode"
          onChange={e => handlePostcodeChange(e)}
          onClick={e => handlePostcodeSelect(e)}
          
        /> {postcodes.result && (
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

        {addresses && (
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