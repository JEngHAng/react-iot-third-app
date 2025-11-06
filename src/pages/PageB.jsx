import React from "react";
import Headeriot from '../components/Headeriot.jsx'
import Footeriot from '../components/Footeriot.jsx'
import Navbariot from '../components/Navbariot.jsx'

export default function PageB() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า B" woo="<3"/>
      PageB
      <Footeriot />
    </div>
  );
}
