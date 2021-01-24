import React from "react";
import "./css/unrealizedPL.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrowUpGreen from "../assets/greenUpArrow.png";
import arrowDownRed from "../assets/redArrowDown.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="prog">
        <div>
          <div
            className="progress"
            style={{
              direction: "rtl",
              borderRadius: "0px",
              height: "5px",
              marginTop: "2px",
            }}
          >
            <div
              className="progress-bar"
              style={{
                width: "70%",
                height: "5px",
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </div>
        <div>
          <div
            className="progress"
            style={{ borderRadius: "0px", height: "5px", marginTop: "2px" }}
          >
            <div
              className="progress-bar"
              style={{
                width: "70%",
                height: "5px",
                backgroundColor: "green",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* <div class="progress-bar" role="progressbar" style={{width: "50%", float:"left"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="50" ></div> */}
    </div>
  );
}

export default UnrealizedPL;
