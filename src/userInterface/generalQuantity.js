import React from "react";
import "./css/generalQuantity.css";
import at from "../assets/at.png";
import databases from "../assets/databases.png";
import dollar from "../assets/dollar.png";

function GeneralQuantity() {
  return (
    <div className="main2">
      <table>
        <tr>
          <td>
            <img src={databases} alt="quantity" />
          </td>
          <td className="heading">Quantity</td>
          <td>150</td>
        </tr>
        <tr>
          <td>
            <img src={at} alt="@" />
          </td>
          <td className="heading">Avg. Cost</td>
          <td>$44.9</td>
        </tr>
        <tr>
          <td>
            <img src={dollar} alt="dollar Bill" />
          </td>
          <td className="heading">Invested&nbsp;Amt</td>
          <td>$6736.98</td>
        </tr>
      </table>
    </div>
  );
}

export default GeneralQuantity;
