import React from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";

import { StylesConfig } from "react-select";

import style from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Ekaterinburg" },
    { value: "city-2", label: "Moscow" },
    { value: "city-3", label: "St.Petersburg" },
  ];

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      borderRadius: "10px",
      width: "194px",
      height: "40px",
      border: "none",
      lineHeight: 1.5,
      zIndex: 100,
    }),
  };

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.header__title}>React weather</div>
      </div>
      <div className={style.header__wrapper}>
        <div className={style.header__change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
