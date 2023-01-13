import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
import constant from "../util/constant";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisitConfig = {
  key: constant.REDUX_PERSIST_TOKEN,
  storage,
};

const persistedReducer = persistReducer(persisitConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
