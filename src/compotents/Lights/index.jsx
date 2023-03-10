import React from "react";
import "./style.css";
import Light from "../Light";

const Lights = ({ lights }) =>
  lights.map((item) => (
    <Light key={item.name} name={item.name} state={item.state} />
  ));

export default Lights;
