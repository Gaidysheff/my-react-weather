import React from "react";
import Days from "./components/Days/Days";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfoLR from "./components/ThisDayInfo/ThisDayInfoLR";

import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfoLR />
      </div>
      <Days />
    </div>
  );
};

export default Home;
