import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import spinnerReducer from "./spinner.reducers";
import productReducer from "./product.reducers";
import cartReducer from "./cart.reducers";
import categoryReducer from "./category.reducers";
export default combineReducers({
  authReducer,
  spinnerReducer,
  productReducer,
  cartReducer,
  categoryReducer,
})