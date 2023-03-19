import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import style from "./Days.module.scss";

interface Props {
  day: Day;
}

const Card = ({ day }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.day}>{day.day}</div>
      <div className={style.day__date}>{day.day_info}</div>
      <div className={style.day__img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={style.day__temp_day}>{day.temp_day}</div>
      <div className={style.day__temp_night}>{day.temp_night}</div>
      <div className={style.day__info}>{day.info}</div>
    </div>
  );
};

export default Card;
