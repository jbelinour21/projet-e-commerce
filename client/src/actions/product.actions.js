import axios from "axios";

import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    GET_PRODUCTS,
    SPINNER_LOADING,
    SPINNER_LOADED,
    PRODUCT_ERROR,
    GET_PRODUCT_BY_ID
    
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

  
  
 /* export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
  };*/