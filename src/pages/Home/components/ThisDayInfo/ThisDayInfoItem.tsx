import React from "react";
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";
import style from "./ThisDayInfo.module.scss";

interface Props {
  item: Item;
}

const ThisDayInfoItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={style.this_day_info__item}>
      <div className={style.this_day_info__indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={style.this_day_info__indicator_name}>{name}</div>   
      <div className={style.this_day_info__indicator_value}>{value}</div>   {" "}
    </div>
  );
};
export default ThisDayInfoItem;
