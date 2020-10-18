import React, { useReducer } from 'react';
import axios from 'axios';
import addressContext from './addressContext';
import addressReducer from './addressReducer';
import { 
    SEARCH_POSTCODE

} from '../constants';

const AddressState =  props => {
    const initialState = {
        name: '',
        address1: '',
        address2: '',
        town: '',
        county: '',
        postcode: '',
        telephone: '',
        email: '',
        contact: {}
    }

    const [state, dispatch ] = useReducer(addressReducer, initialState);

    //Search postcode

    //show addresses

    return <addressContext.Provider
        value={{
            name: state.name,
            address1: state.address1,
            address2: state.address2,
            town: state.town,
            county: state.county,
            postcode: state.postcode,
            telephone: state.telephone,
            email: state.email,
            contacts: state.contacts,

        }}
    >
{props.children}
    </addressContext.Provider>
}

export default AddressState;