import reducerFunc from "./reducers/stockReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducerFunc,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
