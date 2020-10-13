import {FETCH_BOOKS} from "../actions/actionType";

const initialState = {
    books: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
};




export default reducer;



