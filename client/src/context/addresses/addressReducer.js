import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
    DELETE_CONTACT,
    EDIT_CONTACT,
    GET_CONTACT,
    GET_CONTACTS,
    SET_NAME,
    SET_POSTCODE,
    SEARCH_ADDRESS,
    SET_LINE_ONE,
    SET_COUNTY,
    SET_TOWN,
    SET_LINE_TWO,
    SET_EMAIL,
    SET_TELEPHONE,
    SET_ADDRESS,
    ADD_CONTACT

} from '../constants';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_POSTCODE:
             return {
                 ...state,
                 showInfo: true,
                 postcodes: action.payload,
                 loading: false
             }
             case SEARCH_ADDRESS:
                 return {
                     ...state,
                     showInfo:true,
                     addresses: action.payload.addresses,

                 }
             case SET_NAME:
                 return {
                     ...state,
                     name: action.payload,
                     loading: false
                 }

                case SET_POSTCODE:
                    return {
                        ...state,
                        postcode: action.payload,
                        loading: false
                    }
                case SET_LINE_ONE:
                    return {
                        ...state,
                        address1: action.payload,
                        loading: false
                    }
                case SET_LINE_TWO:
                    return {
                        ...state,
                        address2: action.payload,
                        loading: false
                    }
                case SET_TOWN:
                    return {
                        ...state,
                        town: action.payload,
                        loading: false
                    }
                case SET_COUNTY:
                    return {
                        ...state,
                        county: action.payload,
                        loading: false
                    }
                case SET_EMAIL:
                    return {
                        ...state,
                        email: action.payload,
                        loading: false
                    }
                case SET_TELEPHONE:
                    return {
                        ...state,
                        telephone: action.payload,
                        loading: false
                    }
                case SET_ADDRESS:
                    return {
                        ...state,
                        address1: action.payload[0],
                        address2: action.payload[1],
                        town: action.payload[5],
                        county: action.payload[6],

                        loading: false,
                    }
                case ADD_CONTACT:
                    return {
                        ...state,
                        contacts: [action.payload, ...state.contacts],
                        loading: false,
                    }
                case GET_CONTACTS:
                    return {
                        ...state,
                        contacts: state.contacts,
                        loading: false,
                    }

                case SET_LOADING:
                    return {
                        ...state,
                        loading: true
                    }

                    // Filter through the contacts to remove the one with the same postcode
                    // I realise it would be better to add an identifier key in production
                    case DELETE_CONTACT: 
                    return {
                        ...state,
                        contacts: state.contacts.filter((contact) => contact.postcode !== action.payload),
                        loading: false
                    }
                    case SHOW_MANUAL:
                        return {
                            ...state,
                            seeManual: true
                        }
                default: 
                return state;
            }
}