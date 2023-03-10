import React, { useState } from "react";
import "./style.css";
import closed from "./blinds-closed.svg";
import open from "./blinds-open.svg";

const Blinds = ({ state }) => {
  const [blinds, setBlinds] = useState(state);

  return (
    <div class="blinds">
      <div className="blinds__icon">
        <img src={blinds === "open" ? open : closed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={blinds === "open" ? "button button--active" : "button"}
          onClick={() => setBlinds("open")}
        >
          Otevřeno
        </button>
        <button
          className={blinds === "closed" ? "button button--active" : "button"}
          onClick={() => setBlinds("closed")}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
export default Blinds;
