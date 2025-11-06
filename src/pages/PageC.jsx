import React, { useState } from "react";
import Navbariot from "../components/Navbariot";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import BMR from "../assets/bmr.png";
import { useNavigate } from "react-router-dom";

export default function PageC() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า C" woo="^3^" />
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-gray-800 font-bold">
          BMR Calculator
        </h1>

        <h4 className="text-center text-xl text-gray-400">คำนวณ BMR</h4>

        <img src={BMR} alt="BMR_Calculator" className="w-30 mx-auto mt-5" />

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

        <h3 className="font-bold mt-5">อายุ (ปี)</h3>

        <input
          type="number"
          placeholder="เช่น 17"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5">เพศ</h3>

        <label className="flex items-center mt-2">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            className="form-radio mr-2"
          />
          ชาย
        </label>

        <label className="flex items-center mt-2">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            className="form-radio mr-2"
          />
          หญิง
        </label>

        <div className="flex mt-5">
          <button className="p-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white w-full font-bold cursor-pointer mr-2 mt-5">
            คำนวณ BMR
          </button>

          <button className="p-3 bg-red-500 hover:bg-red-700 rounded-lg text-white w-full font-bold cursor-pointer mr-2 mt-5">
            รีเซ็ต
          </button>
        </div>

        <div className="flex justify-center items-center gap-1 mt-5 ">
          ค่า BMR ที่คำนวณได้ :
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
