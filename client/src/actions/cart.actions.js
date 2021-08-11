import axios from "axios";
import {
    ADD_ITEM_TO_CART,
    GET_CART_ITEMS,
    CART_ERROR,
    SPINNER_LOADING,
    SPINNER_LOADED,  
  } from "../constants/types";

export const addItemToCart = (data) => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("http://localhost:8000/cart", data, config);
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data.item,
      });
    } catch (err) {
      dispatch({
        type: CART_ERROR,
        payload: err,
      });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  export const getCartItems = () => async (dispatch) => {
    dispatch({ type: SPINNER_LOADING });
    try {
        const res = await axios.get("http://localhost:8000/cart");
        dispatch({
            type: GET_CART_ITEMS,
            payload: res.data.cart,
          });
     
    } catch (err) {
        dispatch({
            type: CART_ERROR,
            payload: err,
          });
    }
    dispatch({ type: SPINNER_LOADED });
  };

  
 

  
  
