import React from "react";
import Lights from "../Lights";
import Light from "../Light";

const Dashboard = ({data}) =>
<main class="dashboard">
    <Lights lights={data.lights}/>
</main>;

export default Dashboard;

