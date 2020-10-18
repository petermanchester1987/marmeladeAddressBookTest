import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
    DELETE_ADDRESS,
    SET_NAME,

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
             case SET_NAME:
                 return {
                     ...state,
                     name: action.payload,
                     loading: false
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