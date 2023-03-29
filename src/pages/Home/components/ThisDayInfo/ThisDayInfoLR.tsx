import React from "react";

import style from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/image_cloud.svg";
import ThisDayInfoItemLeft from "./ThisDayInfoItemLeft";
import ThisDayInfoItemRight from "./ThisDayInfoItemRight";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

export interface ItemLeft {
  icon_id: string;
  name: string;
}

export interface ItemRight {
  icon_id: string;
  value: any;
}

const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${Math.floor(weather.main.temp)}° feels like ${Math.floor(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${Math.floor(
        weather.main.pressure * 0.75006375541921
      )} mmHg - normal`,
    },
    {
      icon_id: "precip",
      name: "Precipitation",
      value: weather.weather[0].description,
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: `${weather.wind.speed} m/s and direction ${weather.wind.deg}°`,
    },
  ];
  return (
    <div className={style.this_day_info}>
      <div className={style.this_day_info__left}>
        {items.map((item: ItemLeft) => (
          <ThisDayInfoItemLeft key={item.icon_id} item={item} />
        ))}
      </div>
      <div className={style.this_day_info__right}>
        {items.map((item: ItemRight) => (
          <ThisDayInfoItemRight key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={style.this_day_info__cloud_img} src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
