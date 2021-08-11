import {
  ADD_ITEM_TO_CART,
  GET_CART_ITEMS,
  CART_ERROR,
} from "../constants/types";
  
  const initialState = {
    loading: true,
    cart: [],
    item: null,
    err: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_ITEM_TO_CART:
        return {
          ...state,
          cart: [...state.cart, payload],
          loading: false,
        };
      
        case GET_CART_ITEMS:
        return {
          ...state,
          loading: false,
          cart: payload,
        };
  
      case CART_ERROR:
        return {
          loading: false,
          err: payload,
        };
      default:
        return state;
    }
  }
  