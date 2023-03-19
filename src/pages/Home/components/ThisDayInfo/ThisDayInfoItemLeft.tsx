import React from "react";
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { ItemLeft } from "./ThisDayInfoLR";
import style from "./ThisDayInfo.module.scss";

interface Props {
  item: ItemLeft;
}

const ThisDayInfoItemLeft = ({ item }: Props) => {
  const { icon_id, name } = item;
  return (
    <div className={style.this_day_info__item}>
      <div className={style.this_day_info__indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={style.this_day_info__indicator_name}>{name}</div>
    </div>
  );
};
export default ThisDayInfoItemLeft;
