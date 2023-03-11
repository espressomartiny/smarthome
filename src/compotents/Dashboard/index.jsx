import React from "react";
import "./style.css";
import Lights from "../Lights";
import Climate from "../Climate";
import Energy from "../Energy";
import Blinds from "../Blinds";

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
      <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
      <Blinds state={data.blinds} />
    </main>
  );
};
export default Dashboard;
