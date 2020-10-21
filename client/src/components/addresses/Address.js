import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AddressContext from '../../context/addresses/addressContext';


const Address = () => {

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
      editContact,
      deleteContact,
      getContacts,
  } = addressContext;

    // useEffect(() => {
    //     getContacts();
        
    //   }, [getContacts]);

   
      if (contacts.length < 1 ) { return (
        <Redirect to="/" />
      )}  
        return ( 
            contacts.map(contact => (
                        
                <div key={postcode} className="container card all-center m-1">
                    
                        <h2>{name}</h2>
                        <p><strong>Address Line 1:</strong> {address1}</p>
                        <p><strong>Address Line 2:</strong> {address2}</p>
                        <p><strong>Town/City:</strong> {town}</p>
                        <p><strong>County:</strong> {county}</p>
                        <p><strong>Postcode:</strong> {postcode}</p>
                        <p><strong>Telephone:</strong> {telephone}</p>
                        <p><strong>Email:</strong> {email}</p>
                    
                       
                            <button onClick={e => editContact(postcode)} className="badge-light p-1 m-1">Edit Contact</button>
                            <button onClick={e => deleteContact(postcode)} className="badge-danger p-1 m-1">Remove</button>
                       


                </div>

                
                )  
            )
        )
    
}

export default Address
