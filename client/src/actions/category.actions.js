import axios from "axios";

import {
    GET_CATEGORIES,
    SPINNER_LOADING,
    SPINNER_LOADED,
    CATEGORY_ERROR,

  } from "../constants/types";



  export const getCategories = () => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    try {
        const res = await axios.get("http://localhost:8000/category");
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.categories,
          });
     
    } catch (err) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: err,
          });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  
  
  

