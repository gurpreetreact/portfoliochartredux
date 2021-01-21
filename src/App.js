import "./App.css";
import * as actions from "./components/actions";
import "./components/action";

function App() {
  const initialState = {
    scrip: "",
    quantity: 0,
    price: 0,
    avgCost: "",
    investedAmount: "",
    percentOfPortfolio: 0,
    unrealizedPandL: "",
    percentReturn: 0,
  };
  const reducerFunc = (state = initialState, action) => {
    switch (action.type) {
      case actions.SUCCESSFUL:
        return {
          scrip: action.payload.scrip,
          quantity: action.payload.quantity,
          price: action.payload.price,
          avgCost: action.payload.avgCost,
          investedAmount: action.payload.investedAmount,
          percentOfPortfolio: action.payload.percentOfPortfolio,
          unrealizedPandL: action.payload.unrealizedPandL,
          percentReturn: action.payload.percentReturn,
        };
      case actions.FAILED:
        return [...state, { error: action.payload.error }];
    }
  };

  console.log("scrip " + initialState.scrip);
  console.log("quantity " + initialState.quantity);
  console.log("price " + initialState.price);
  console.log("avgCost " + initialState.avgCost);
  console.log("investedAmount " + initialState.investedAmount);
  console.log("percentOfPortfolio " + initialState.percentOfPortfolio);
  console.log("unrealizedPandL " + initialState.unrealizedPandL);
  console.log("percentreturn " + initialState.percentReturn);

  return <div className="App"></div>;
}

export default App;
