import React from "react";
import Navbariot from "../components/Navbariot";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";  
export default function PageC() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า C" woo="^3^"/>
      PageC
      <Footeriot />
    </div>
  );
}
