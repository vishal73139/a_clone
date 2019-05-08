import { combineReducers } from "redux"; 
import AllDataReducer from "./alldataReducer";
export default combineReducers({
  all_data:AllDataReducer
})