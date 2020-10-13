import { createStore, combineReducers, applyMiddleware } from "redux";
import authors from "./authors";
import books from "./books";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  authors: authors,
  books: books,
});


export default rootReducer;