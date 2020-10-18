import React, { useContext } from 'react';
import Address from './Address';
import AddressContext from '../../context/addresses/addressContext';
import Spinner from '../layout/Spinner';
import SearchAddresses from './SearchAddresses';

const AddressList = () => {

    const addressContext = useContext(AddressContext);

    const { loading, contacts } = addressContext;

    if(loading) {
        return <Spinner />
    } else {
    return (
        <div style={listStyle}>
           {contacts.map(address => (
               <Address key={address.name} />
           ))}
           
        </div>
    )
    }
}

const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

export default AddressList
