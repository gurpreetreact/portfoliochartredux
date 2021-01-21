import { reducerFunc } from "./App";
import redux, { createStore } from "redux";
import { fetchSuccessful, fetchFailed } from "./components/action";

const store = createStore(reducerFunc);

store.dispatch(fetchSuccessful);
store.dispatch(fetchFaileda);
