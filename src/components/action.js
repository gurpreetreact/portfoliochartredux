import React from "react";
import * as actions from "./actions";

export function fetchSuccessful() {
  return {
    type: actions.SUCCESSFUL,
    payload: {
      scrip: "",
      quantity: 0,
      price: 0,
      avgCost: "",
      investedAmount: "",
      percentOfPortfolio: 0,
      unrealizedPandL: "",
      percentReturn: 0,
    },
  };
}

export function fetchFailed() {
  return {
    type: actions.FAILED,
    payload: [
      ...state,
      {
        error: "fetch error",
      },
    ],
  };
}
