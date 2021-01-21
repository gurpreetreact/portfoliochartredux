import React, { useState, useEffect } from "react";
import * as actions from "./actions";
import axios from "axios";

export const FetchSuccessful = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("}}}}}}}}}}}}}}}}}}}}}}}}}");
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://demo8900446.mockable.io/portfoliochartredux")
      .then((res) => {
        const data = res.data;
        setData(
          data.map((datum) => {
            setData(datum);
          })
        );
      })
      .catch((error) => {
        console.log("++++++++++++++++++++++++" + error);
      });
      return function () {
        unmounted = true;
        source.cancel("Cancelling in cleanup");
    };
  });

  console.log("----------------data down------------------");
  console.log("scrip " + data.scrip);
  console.log("quantity " + data.quantity);
  console.log("price " + data.price);
  console.log("avgCost " + data.avgCost);
  console.log("investedAmount " + data.investedAmount);
  console.log("percentOfPortfolio " + data.percentOfPortfolio);
  console.log("unrealizedPandL " + data.unrealizedPandL);
  console.log("percentreturn " + data.percentReturn);

  return (
    <React.Fragment>
      <p>hello</p>
    </React.Fragment>
  );
  // type: actions.SUCCESSFUL,
  // payload: {
  //   scrip: data.scrip,
  //   quantity: data.quantity,
  //   price: data.price,
  //   avgCost: data.avgCost,
  //   investedAmount: data.investedAmount,
  //   percentOfPortfolio: data.percentOfPortfolio,
  //   unrealizedPandL: data.unrealizedPandL,
  //   percentReturn: data.percentReturn,
  // },
};

export function fetchFailed() {
  return {
    type: actions.FAILED,
    payload: {
      error: "fetch error",
    },
  };
}
