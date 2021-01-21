import "./App.css";
import * as actions from "./actions";
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
  export const reducerFunc = (state = initialState, action) => {
    switch (action.type) {
      case actions.SUCCESSFUL:
        return {
          scrip: action.payload.scrip,
          quantity: action.payload.quantity,
          price: action.payload.price,
          avgCost: action.payload.avgCost,
          investedAmount: action.payload.investedAmount,
          percentOfPortfolio: action.payload[percentOfPortfolio],
          unrealizedPandL: action.payload.unrealizedPandL,
          percentReturn: action.payload.percentReturn,
        };
      case actions.FAILED:
        return [...state, { error: action.payload.error }];
      default:
        [...state];
    }
  };

  useEffect(() => {
    axios
      .get("https://demo8900446.mockable.io/portfoliochartredux")
      .then((res) => {
        const data = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div className="App">
    
  </div>;
}

export default App;
