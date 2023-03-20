import React from "react";
import style from "./Popup.module.scss";
import ThisDayInfoItemLeft from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItemLeft";
import ThisDayInfoItemRight from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItemRight";

import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";

interface Props {}

export interface ItemLeft {
  icon_id: string;
  name: string;
}

export interface ItemRight {
  icon_id: string;
  value: string;
}

const Popup = (props: Props) => {
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
    <>
      <div className={style.blur}></div>
      <div className={style.popup}>
        <div className={style.popup__day}>
          <div className={style.popup__temp}>20°</div>
          <div className={style.popup__date}>31 August</div>
          <div className={style.popup__img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.popup__bottom_block}>
            <div className={style.popup__bottom_time}>
              Time: <span>21:54</span>
            </div>
            <div className={style.popup__bottom_city}>
              City: <span>Eburg</span>
            </div>
          </div>
        </div>
        <div className={style.popup__left}>
          {items.map((item: ItemLeft) => (
            <ThisDayInfoItemLeft key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={style.popup__right}>
          {items.map((item: ItemRight) => (
            <ThisDayInfoItemRight key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={style.popup__close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
