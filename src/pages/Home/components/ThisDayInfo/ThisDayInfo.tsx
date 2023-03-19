import React from "react";

import style from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/image_cloud.svg";
import ThisDayInfoItem from "./ThisDayInfoItem";

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "20° feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "765 mmHg - normal",
    },
    {
      icon_id: "precip",
      name: "Precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "3 m/s southwest - light breeze",
    },
  ];
  return (
    <div className={style.this_day_info}>
      <div className={style.this_day_info__items}>
        {items.map((item: Item) => (
          <ThisDayInfoItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={style.this_day_info__cloud_img} src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
