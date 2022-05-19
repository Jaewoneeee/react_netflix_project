import { combineReducers } from "redux";
import movieReducer from "./movieRducer";

export default combineReducers({
    movies : movieReducer
})