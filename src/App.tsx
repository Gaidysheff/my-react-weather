import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MonthlyStatistics from "./pages/MonthlyStatistics/MonthlyStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

import "./styles/styles.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<MonthlyStatistics />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
