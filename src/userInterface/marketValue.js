import React from "react";
import "./css/marketValue.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MarketValue() {
  return (
    <div className="main3">
      <div className="column">
        <span>Market&nbsp;Value</span>
        <span>$9542.56</span>
      </div>
      <div className="column">
        <span id="portfolioColor">%&nbsp;of&nbsp;Portfolio&nbsp;value</span>
        <span>40%</span>
      </div>
      <div class="progress" style={{ height: "5px", marginTop: "2px" }}>
        <div
          class="progress-bar"
          style={{
            width: "70%",
            height: "5px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
}

export default MarketValue;
