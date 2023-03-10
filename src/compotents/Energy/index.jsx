import React from "react";
import "./style.css";
import electricityImg from "./electricity.svg";
import waterImg from "./water.svg";

const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src={electricityImg} />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{electricity} Kw</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src={waterImg} />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {water} m<sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
