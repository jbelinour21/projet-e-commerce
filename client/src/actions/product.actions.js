import axios from "axios";

import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    GET_PRODUCTS,
    SPINNER_LOADING,
    SPINNER_LOADED,
    PRODUCT_ERROR,
    GET_PRODUCT_BY_ID,
    SEARCH_PRODUCT,
  } from "../constants/types";

export const createProduct = (data) => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("http://localhost:8000/products", data, config);
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data.product,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  export const getProducts = () => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    try {
        const res = await axios.get("http://localhost:8000/products");
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.products,
          });
     
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err,
          });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  
  export const getProductById = (productid) => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    try {
        const res = await axios.get(`http://localhost:8000/products/${productid}`);
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: res.data.product,
          });
     
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err,
          });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  
  

  export const searchProductByName = (query) => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    try {
      const res = await axios.get(`http://localhost:8000/products/auto_complete?q=${query}`);
      dispatch({
        type: SEARCH_PRODUCT,
        payload: res.data.products,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
    dispatch({ type: SPINNER_LOADED });
  };