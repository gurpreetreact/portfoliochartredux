import React from "react";
import "./css/unrealizedPL.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrowUpGreen from "../assets/greenUpArrow.png";
import arrowDownRed from "../assets/redArrowDown.png";

function UnrealizedPL() {
  return (
    <div className="main4">
      <div className="column">
        <span>Unrealized&nbsp;P/L</span>
        <span>$2805.58</span>
      </div>
      <div className="column">
        <span id="portfolioColor">%&nbsp;Return</span>

        <span>
          <span>
            <img src={arrowUpGreen} alt="arrowUpGreen" />
          </span>
          <span>
            <img src={arrowDownRed} alt="arrowDownRed" />
          </span>
          40%
        </span>
      </div>
    </div>
  );
}

export default UnrealizedPL;
