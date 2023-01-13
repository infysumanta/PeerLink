import { combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
