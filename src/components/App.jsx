"use client";

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "next/image";

const App = () => {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.API_BASE_URL}/generate-pdf`
      );

      window.open(data.url, "_blank");
    } catch (err) {
      alert("Error in generating PDF!!");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="print" onClick={generatePDF}>
        {!loading && (
          <Image
            src="/printer.svg"
            alt="Printer Logo"
            width={24}
            height={24}
            priority
          />
        )}{" "}
        <span className="printText">{loading ? "Loading" : "Print"}</span>
      </div>
    </div>
  );
};

export default App;
