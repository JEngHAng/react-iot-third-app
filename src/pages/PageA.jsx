import React from "react";
import Navbariot from "../components/Navbariot";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";  
export default function PageA() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า A" woo="^_^" />
      PageA
      <Footeriot />
    </div>
  );
}
