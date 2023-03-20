import React from "react";

import style from "./Days.module.scss";

interface Props {}
export interface Tabs {
  value: string;
}

const Tabs = (props: Props) => {
  const tabs: Tabs[] = [
    {
      value: "for week",
    },
    {
      value: "for month",
    },
    {
      value: "for 10 days",
    },
  ];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={style.tabs__tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.tabs__cancel}>Cancel</div>
    </div>
  );
};

export default Tabs;
