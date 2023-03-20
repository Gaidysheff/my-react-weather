import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

import style from "./ThisDay.module.scss";

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={style.this_day}>
      <div className={style.this_day__top_block}>
        <div className={style.this_day__this_temperature}>
          <div className={style.this_day__this_temp}>20&deg;</div>
          <div className={style.this_day__this_today}>Today</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={style.this_day__bottom_block}>
        <div className={style.this_day__bottom_time}>
          Time: <span>21:54</span>
        </div>
        <div className={style.this_day__bottom_city}>
          City: <span>Eburg</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
