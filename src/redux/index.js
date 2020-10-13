import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import thunk from 'redux-thunk';
import rootReducer from "./reducers"
import {createStore, combineReducers , compose ,applyMiddleware} from 'redux'; 
import {fetchAuthors, fetchBooks} from "./actions";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

export default store
 