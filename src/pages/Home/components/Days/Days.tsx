import React from "react";
import Card from "./Card";

import style from "./Days.module.scss";
import Tabs from "./Tabs";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Today",
      day_info: "30 March",
      icon_id: "sun",
      temp_day: "+8",
      temp_night: "+5",
      info: "Cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "31 March",
      icon_id: "small_rain_sun",
      temp_day: "+8",
      temp_night: "+5",
      info: "Some rain and sun",
    },
    {
      day: "Mon",
      day_info: "1 April",
      icon_id: "small_rain",
      temp_day: "+8",
      temp_night: "+5",
      info: "Some rain",
    },
    {
      day: "Tue",
      day_info: "2 April",
      icon_id: "mainly_cloudy",
      temp_day: "+8",
      temp_night: "+5",
      info: "Cloudy",
    },
    {
      day: "Wed",
      day_info: "3 April",
      icon_id: "mainly_cloudy",
      temp_day: "+8",
      temp_night: "+5",
      info: "Cloudy",
    },
    {
      day: "Thu",
      day_info: "4 April",
      icon_id: "rain",
      temp_day: "+8",
      temp_night: "+5",
      info: "Rain",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <Tabs />
        <div className={style.days}>
          {days.map((day: Day) => (
            <Card day={day} key={day.day} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Days;
