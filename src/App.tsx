import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MonthlyStatistics from "./pages/MonthlyStatistics/MonthlyStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

import "./styles/styles.module.scss";

type Props = {};

class App extends React.Component {
  state = {
    selectedCity: "",
  };

  handleCallback = (selected: any) => {
    this.setState({ selectedCity: selected });
  };

  render() {
    const { selectedCity } = this.state;
    return (
      <div>
        <h1> Вытягиваю selected city:{selectedCity}</h1>
        <div className="container">
          <Header parentCallback={this.handleCallback} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<MonthlyStatistics />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
