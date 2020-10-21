import React, { useState, useContext, Fragment } from "react";
import { Redirect } from 'react-router-dom';
import AddressContext from '../../context/addresses/addressContext';

const Search = () => {

  const [contactAdded, setContactAdded ] = useState(false);

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
    addContact,
    
} = addressContext;


  const showAddress = () => {
    console.log(showManual);
  }
  

  const onChange = (e) => {
    
  };

  const createContact = (
    { name,
    address1,
    address2,
    town,
    county,
    postcode,
    telephone,
    email }
    ) => {

    return {
      name,
      address1,
      address2,
      town,
      county,
      postcode,
      telephone,
      email
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const contact = createContact(addressContext);
    addContact(contact);
    setContactAdded(true);
    }
    if(contactAdded) return (
    <Redirect to="/addresses" />
    )
  else if(!seeManual) return ( 
  <Fragment>
    <p>Or</p>
  
  <input
    type="submit"
    className="btn btn-dark btn-block"
    value="Enter Address Info Manually"
    onClick={showManual}/>
  </Fragment>
)
  return (
    <div className="container">
       <form onSubmit={onSubmit} action="" className="form">
      
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
        </form>
    </div>
  );
};

Search.propTypes = {
  
};

export default Search;