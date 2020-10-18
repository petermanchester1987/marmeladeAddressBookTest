import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SET_INFO

} from '../constants';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_POSTCODE:
             return {
                 ...state,
                 showInfo: true,
                 postcode: action.payload,
                 loading: false
             }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case SET_INFO:
                return {
                    ...state,
                    showInfo: true
                }
        default: 
        return state;
    }
}