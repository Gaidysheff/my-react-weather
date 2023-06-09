import Select from "react-select";
import { StylesConfig } from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import style from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

type Props = {
  parentCallback: Function;
};

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "city-1", label: "Ekaterinburg" },
    { value: "city-2", label: "Moscow" },
    { value: "city-3", label: "St.Petersburg" },
  ];

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      borderRadius: "10px",
      width: "194px",
      height: "40px",
      border: "none",
      lineHeight: 1.5,
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === "dark" ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  const [selected, parentCallback] = useState(null);

  const onChange = (selectedOption: any) => {
    props.parentCallback(selectedOption.label);
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
        <div className={style.header__change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
          onChange={onChange}
          autoFocus={true}
          value={options.find((x) => x.label === selected)}
        />
      </div>
      {/* <>this's for test / You've selected: {selected}</>
      <br />
      <>Another check: {JSON.stringify(selected, null, 2)}</> */}
    </header>
  );
};

export default Header;
