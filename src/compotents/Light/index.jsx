import React, { useState } from "react";

const Light = ({ name, state }) => {
  const [lights, setLights] = useState(state);
  return (
    <>
      <div
        class="light"
        onClick={() => (lights === "off" ? setLights("on") : setLights("off"))}
      ></div>
      <div class="light__icon">
        <img src={lights === "off" ? "./light-off.svg" : "./light-on.svg"}></img>
      </div>
      <div class="light__name">{name}</div>
    </>
  );
};

export default Light;
