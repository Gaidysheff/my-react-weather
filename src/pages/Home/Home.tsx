import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import fetchCurrentWeather from "../../store/thunks/fetchCurrentWeather";
import Days from "./components/Days/Days";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfoLR from "./components/ThisDayInfo/ThisDayInfoLR";

import style from "./Home.module.scss";

interface Props {}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  //   const { weather } = useCustomSelector(
  //     (state) => state.currentWeatherSliceReducer
  // );
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Moscow"));
  }, []);
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfoLR />
      </div>
      <Days />
    </div>
  );
};

export default Home;
