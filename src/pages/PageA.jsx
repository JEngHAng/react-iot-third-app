import React from "react";
import Navbariot from "../components/Navbariot";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import money from "../assets/money.jpg";
export default function PageA() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า A" woo="^_^" />
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-green-600 font-bold">
          Money Shared
        </h1>

        <img src={money} alt="money_shared" className="w-30 mx-auto mt-5" />

        <h3 className="font-bold mt-5">ป้อนเงิน (บาท)</h3>

        <input
          type="number"
          placeholder="Input Money ..."
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5">ป้อนจำนวนคน (คน)</h3>

        <input
          type="number"
          placeholder="Input person ..."
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <div className="flex mt-5">
          <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white w-full cursor-pointer mr-2">
            คำนวณเงินที่แต่ละคนต้องจ่าย
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-600 rounded-lg text-white w-full cursor-pointer">
            ยกเลิก
          </button>
        </div>

        <div className="flex justify-center items-center gap-5 mt-5 ">
          หารคนละ
          <span className="text-3xl text-red-500 font-bold">
            0.00
          </span>
          บาท
        </div>

      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <Footeriot />
    </div>
  );
}
