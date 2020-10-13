import { FETCH_AUTHORS } from "./actionType";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchAuthors = () => {
  return async (dispatch) => {
    try{
    const res = await instance.get("api/authors/");

    const authors = res.data;
    dispatch({
      type: FETCH_AUTHORS,
      payload: authors,
    });
  }catch(err){

  }
}}