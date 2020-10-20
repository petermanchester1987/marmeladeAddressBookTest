import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
    DELETE_ADDRESS,
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

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case DELETE_ADDRESS: 
            return {
                ...state,
                address: [],
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