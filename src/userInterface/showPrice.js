import React from "react";
import "./css/showPrice.css";
import threelines from "../assets/threelines.png";

function ShowPrice() {
  return (
    <div className="main1">
      {console.log("==")}
      <div className="grid">
        <div className="image">
          <img src={threelines} width="100%" alt="ThreeLines" />
        </div>
      </div>
      <div className="grid">
        <div className="name">ITOT</div>
        <div>
          {/* className=""> */}
          <span className="name" id="dollar">
            $
          </span>
          <span className="numberPrice">283.3</span>
        </div>
      </div>
    </div>
  );
}

export default ShowPrice;
