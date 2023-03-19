import React from "react";

import { ItemRight } from "./ThisDayInfoLR";
import style from "./ThisDayInfo.module.scss";

interface Props {
  item: ItemRight;
}

const ThisDayInfoItemRight = ({ item }: Props) => {
  const { value } = item;
  return (
    <div className={style.this_day_info__item}>
      <div className={style.this_day_info__empty}></div>
      <div className={style.this_day_info__indicator_value}>{value}</div>
    </div>
  );
};
export default ThisDayInfoItemRight;
