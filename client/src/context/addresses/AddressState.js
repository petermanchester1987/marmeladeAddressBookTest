import React, { useReducer } from 'react';
import axios from 'axios';
import addressContext from './addressContext';
import addressReducer from './addressReducer';
import { 
    SEARCH_POSTCODE

} from '../constants';

/* As I mentioned, I added the Context API because I wanted to practise 
using context and hooks.

I thought I would only need one context, the address context, 
as that is what will be used on both main components
*/

const AddressState =  props => {

    //This is setting the initial global state.
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

    //we use the useReducer hook to set the state around our App
    const [state, dispatch ] = useReducer(addressReducer, initialState);

    //These will be my actions
    //Search postcode

    //get addresses

    //show addresses

    //we return the provider , this wraps our application and will pass 
    // on our data all around the application
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

        }}>
            {props.children}
        </addressContext.Provider>
}

export default AddressState;