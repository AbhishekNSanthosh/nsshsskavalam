import React from "react";
import styles from "@styles/menubar.module.scss";
import { navItems } from "../../../common/Utils/utils";

export default function Menubar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {navItems?.map((item,index) => (
            <div className={item?.hr ? styles.navItemBoxHr : styles.navItemBox} key={`${item?.title}_${index}`}>
              <a href={item?.link} className={styles.navLink}>{item?.title}</a>
            </div>
        ))}
      </div>
    </div>
  );
}
