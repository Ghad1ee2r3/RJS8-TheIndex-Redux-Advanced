import { FETCH_BOOKS } from "./actionType";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchBooks = () => {
  return async (dispatch) => {
    try{
    const res = await instance.get("api/books/");

    const books = res.data;
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
  }catch(err){

  }
}}