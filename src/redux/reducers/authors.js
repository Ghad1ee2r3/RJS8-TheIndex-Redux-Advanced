import { FETCH_AUTHORS } from "../actions/actionType";

const initialState = {
  authors: [],

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
        return {
          ...state,
          authors: action.payload
        };
    default:
      return state;
  }
};




export default reducer;



