import todoReducer from "./todoReducer";
import inputReducer from "./inputReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    todoReducer,
    inputReducer
})

export default allReducers