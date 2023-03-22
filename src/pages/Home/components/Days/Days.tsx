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
      day_info: "28 Aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "29 Aug",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Some rain and sun",
    },
    {
      day: "Mon",
      day_info: "30 Aug",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Some rain",
    },
    {
      day: "Tue",
      day_info: "31 Aug",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Wed",
      day_info: "1 Sept",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Thu",
      day_info: "2 Sept",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Rain",
    },
    {
      day: "Fri",
      day_info: "3 Sept",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Rain",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={style.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

export default Days;
