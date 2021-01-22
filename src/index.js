import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BuySell from "./userInterface/buySell";
import Donut from "./userInterface/donut";
import GeneralQuantity from "./userInterface/generalQuantity";
import MarketValue from "./userInterface/marketValue";
import ShowPrice from "./userInterface/showPrice";
import UnrealizedPL from "./userInterface/unrealizedPL";
// import { FetchSuccessful } from "./components/action";
// import PersonList from './components/PersonList';

ReactDOM.render(
  <React.StrictMode>
    {/* <FetchSuccessful /> */}
    <div className="parentFormat">
      <div>
        <span className="index">
          <span className="padding" style={{ padding: "0px" }}>
            <ShowPrice />
          </span>
          <span className="padding">
            <GeneralQuantity />
          </span>
          <span className="padding">
            <MarketValue />
          </span>
          <span className="padding">
            <UnrealizedPL />
          </span>
          <span className="padding">
            <BuySell />
          </span>
        </span>
      </div>
      <div>
        <span className="donut">
          <Donut />
        </span>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
