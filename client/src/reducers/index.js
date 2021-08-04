import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import spinnerReducer from "./spinner.reducers";
export default combineReducers({
  authReducer,
  spinnerReducer,
})