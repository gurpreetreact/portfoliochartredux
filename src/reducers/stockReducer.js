import { FETCH_SUCCESSFUL, FETCH_FAILED } from "../actions/types";

const initialState = {
  stocksData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESSFUL:
      console.log("reducer===");
      console.log(action.payload.map((data) => console.log(data)));
      return {
        ...state,
        stocksData: action.payload,
      };
    default:
      return state;
  }
}
