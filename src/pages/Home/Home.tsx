import React from "react";
import ThisDay from "./components/ThisDay/ThisDay";

import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <ThisDay />
    </div>
  );
};

export default Home;
