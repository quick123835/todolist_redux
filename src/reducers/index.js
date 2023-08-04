import todoReducer from "./todoReducer";
import inputReducer from "./inputReducer";
import dateReducer from "./dateReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    todoReducer,
    inputReducer,
    dateReducer
})

export default allReducers