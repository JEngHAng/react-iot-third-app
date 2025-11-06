import React from "react";
import Headeriot from "../components/Headeriot.jsx";
import Footeriot from "../components/Footeriot.jsx";
import Navbariot from "../components/Navbariot.jsx";
import BMI from "../assets/bmi.png";
import { useNavigate } from 'react-router-dom'

export default function PageB() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า B" woo="⚖️" />
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-gray-800 font-bold">
          BMI Calculator
        </h1>

        <h4 className="text-center text-xl text-gray-400">คำนวณ BMI</h4>

        <img src={BMI} alt="BMI_Calculator" className="w-30 mx-auto mt-5" />

        <h3 className="font-bold mt-5">ป้อนน้ำหนัก (กิโลกรัม)</h3>

        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5">ป้อนส่วนสูง (เซนติเมตร)</h3>

        <input
          type="number"
          placeholder="เช่น 170"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white w-full font-bold cursor-pointer mr-2 mt-5">
          คำนวณ BMI
        </button>

        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 w-full font-bold cursor-pointer mr-2 mt-5">
          รีเซ็ต
        </button>

        <div className="flex justify-center items-center gap-1 mt-5 ">
          ค่า BMI ที่คำนวณได้ :
          <span className="text-xl text-blue-500 font-bold">0.00</span>
        </div>

        <button
          onClick={() => navigate("/PageA")}
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 w-full font-bold cursor-pointer mt-5"
        >
          กลับหน้าหลัก
        </button>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <Footeriot />
    </div>
  );
}
