import React, { useReducer } from 'react';
import axios from 'axios';
import addressContext from './addressContext';
import addressReducer from './addressReducer';
import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
    DELETE_ADDRESS,
    SET_NAME,
    SET_POSTCODE,
    SEARCH_ADDRESS,
    SET_LINE_ONE,
    SET_LINE_TWO,
    SET_TOWN,
    SET_COUNTY,
    SET_EMAIL,
    SET_TELEPHONE,
    SET_ADDRESS

} from '../constants';


/* As I mentioned, I added the Context API because I wanted to practise 
using context and hooks.

I thought I would only need one context, the address context, 
as that is what will be used on both main components
*/

const AddressState =  props => {

    //This is setting the initial global state.
    const initialState = {
        name: "",
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcodes: [],
        addresses: [],
        postcode: "",
        telephone: "",
        email: "",
        contacts: [],
        loading: false,
        seeManual: false,
    
    }

    //we use the useReducer hook to set the state around our App
    const [state, dispatch ] = useReducer(addressReducer, initialState);

    //These will be my actions
    //Search postcode

    const searchPostcode = async (postcode) => {
        setLoading();

        const res = await axios.get(
            `/api/${postcode}`
        )

       dispatch({
           type: SEARCH_POSTCODE,
           payload: res.data
       })
    }

    //get addresses

    //Set name
    const setName = (name) => dispatch({ 
        type: SET_NAME,
        payload: name
     })

     //set Postcode
     const setPostcode = (postcode) => dispatch({ 
        type: SET_POSTCODE,
        payload: postcode
     })

     //set Line 1
     const setLineOne = (lineOne) => dispatch({
         type: SET_LINE_ONE,
         payload: lineOne
     })
     //set Line 2
     const setLineTwo = (lineTwo) => dispatch({
         type: SET_LINE_TWO,
         payload: lineTwo
     })
     //set Line 1
     const setTown = (town) => dispatch({
         type: SET_TOWN,
         payload: town
     })
     //set Line 1
     const setCounty = (county) => dispatch({
         type: SET_COUNTY,
         payload: county
     })
     //set Line 1
     const setEmail = (email) => dispatch({
         type: SET_EMAIL,
         payload: email
     })
     //set Line 1
     const setTelephone = (telephone) => dispatch({
         type: SET_TELEPHONE,
         payload: telephone
     })

     //set address
     const setAddress = address => dispatch({
         type: SET_ADDRESS,
         payload: address
     })

    //search address
    const searchAddress = async (searchPostcode) => {
        setLoading();

        const res = await axios.get(
            `/api/address/${searchPostcode}`
        )
            dispatch({
                type: SEARCH_ADDRESS,
                payload: res.data
            })
    }

    //delete address
    const deleteAddress = () => dispatch({ type: DELETE_ADDRESS })

    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    //show manual
    const showManual = () => dispatch({ type: SHOW_MANUAL });

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
            postcodes: state.postcodes,
            addresses: state.addresses,
            telephone: state.telephone,
            email: state.email,
            contacts: state.contacts,
            loading: state.loading,
            seeManual: state.seeManual,
            showManual,
            searchPostcode,
            setLoading,
            setName,
            setPostcode,
            setLineOne,
            setLineTwo,
            setTown,
            setCounty,
            setPostcode,
            setTelephone,
            setEmail,
            setAddress,
            searchAddress


        }}>
            {props.children}
        </addressContext.Provider>
}

export default AddressState;