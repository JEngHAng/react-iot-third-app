import React, { useState } from "react";
import Navbariot from "../components/Navbariot";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import CAR from "../assets/car.png";
import { useNavigate } from "react-router-dom";

export default function PageD() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [down_payment, setDownPayment] = useState("");
  const [Annual_interest_rate, setAnnualInterestRate] = useState("");
  const [installmentMonths, setInstallmentMonths] = useState("");

  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า D" woo="🚕" />
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-gray-800 font-bold">
          Car Installment Calculator
        </h1>

        <h4 className="text-center text-xl text-gray-400">
          คำนวณ Car Installment
        </h4>

        <img
          src={CAR}
          alt="Car_installment_Calculator"
          className="w-35 mx-auto mt-5"
        />

        <h3 className="font-bold mt-5">ชื่อผู้คำนวณ</h3>

        <input
          type="text"
          placeholder="เช่น สมศรี บุญลั่น"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5">ราคารถ (บาท)</h3>

        <input
          type="text"
          value={value}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/,/g, ""); // ลบลูกน้ำ
            if (!isNaN(rawValue) && rawValue !== "") {
              const formatted = Number(rawValue).toLocaleString();
              setValue(formatted);
            } else if (rawValue === "") {
              setValue("");
            }
          }}
          placeholder="เช่น 170,000"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5">ดอกเบี้ยต่อปี (%)</h3>

        <input
          type="number"
          value={Annual_interest_rate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
          placeholder="เช่น 3.5"
          className="p-2 border border-gray-300 rounded w-full mt-2 "
        />

        <div>
          <h3 className="font-bold mt-5">เงินดาวน์ (%)</h3>

          <div className="flex flex-wrap gap-5 mt-2">
            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="downPayment"
                value="15"
                checked={down_payment === "15"}
                onChange={(e) => setDownPayment(e.target.value)}
                className="form-radio mr-2"
              />
              15%
            </label>

            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="downPayment"
                value="20"
                checked={down_payment === "20"}
                onChange={(e) => setDownPayment(e.target.value)}
                className="form-radio mr-2"
              />
              20%
            </label>

            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="downPayment"
                value="25"
                checked={down_payment === "25"}
                onChange={(e) => setDownPayment(e.target.value)}
                className="form-radio mr-2"
              />
              25%
            </label>

            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="downPayment"
                value="30"
                checked={down_payment === "30"}
                onChange={(e) => setDownPayment(e.target.value)}
                className="form-radio mr-2"
              />
              30%
            </label>

            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="downPayment"
                value="35"
                checked={down_payment === "35"}
                onChange={(e) => setDownPayment(e.target.value)}
                className="form-radio mr-2"
              />
              35%
            </label>
          </div>
        </div>

        <h3 className="font-bold mt-5">จำนวนเดือนที่ผ่อน</h3>
        <select
          value={installmentMonths}
          onChange={(e) => setInstallmentMonths(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mt-2"
        >
          <option value="">-- เลือกจำนวนเดือน --</option>
          <option value="12">12 เดือน</option>
          <option value="24">24 เดือน</option>
          <option value="36">36 เดือน</option>
          <option value="48">48 เดือน</option>
          <option value="60">60 เดือน</option>
        </select>

        <div className="flex mt-5">
          <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white w-full font-bold cursor-pointer mr-2 mt-5">
            คำนวณ
          </button>

          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 w-full font-bold cursor-pointer mr-2 mt-5">
            ล้างข้อมูล
          </button>
        </div>

        <div className="flex justify-center items-center gap-1 mt-5 text-gray-800 font-bold">
          ผ่อนชำระต่อเดือน :
          <span className="text-xl">0.00</span>
          บาท
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
