import React from "react";
import Light from "../Light";

const Lights = ({ lights }) =>
  lights.map((item) => (
    < Light key={item.name} name={item.name} state={item.stete} />
  ));

export default Lights;
