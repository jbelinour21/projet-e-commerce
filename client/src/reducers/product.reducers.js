import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  GET_PRODUCT_BY_ID,
  SEARCH_PRODUCT
} from "../constants/types";

const initialState = {
  loading: true,
  products: [],
  product: null,
  err: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    case PRODUCT_ERROR:
      return {
        loading: false,
        err: payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
        loading: false,
      };
      case SEARCH_PRODUCT:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    default:
      return state;
  }
}
