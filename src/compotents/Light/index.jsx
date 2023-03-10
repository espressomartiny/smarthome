import React, { useState } from "react";
import './style.css'
import lightOff from './light-off.svg'
import lightOn from './light-on.svg'

const Light = ({ name, state }) => {
  const [lights, setLights] = useState(state);
  return (
    <>
      <div
        class="light"
        onClick={() => (lights === "off" ? setLights("on") : setLights("off"))}
      ></div>
      <div class="light__icon">
        <img src={lights === "off" ? lightOff : lightOn}></img>
      </div>
      <div class="light__name">{name}</div>
    </>
  );
};

export default Light;
