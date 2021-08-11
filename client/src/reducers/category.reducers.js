import {
    GET_CATEGORIES,
    CATEGORY_ERROR,
  } from "../constants/types";
  
  const initialState = {
    loading: true,
    categories: [],
    err: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    
      case GET_CATEGORIES:
        return {
          ...state,
          loading: false,
          categories: payload,
        };
  
      case CATEGORY_ERROR:
        return {
          loading: false,
          err: payload,
        };
  
      
  
      default:
        return state;
    }
  }
  