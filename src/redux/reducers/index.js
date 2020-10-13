import { createStore, combineReducers, applyMiddleware } from "redux";
import authors from "./authors";
import books from "./books";
import thunk from "redux-thunk";
import authorsReducers from "./authors";
import booksReducers from "./books";

const rootReducer = combineReducers({
  authors: authors,
  books: books,
});


export default rootReducer;