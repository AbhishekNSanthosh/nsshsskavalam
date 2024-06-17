import React from "react";
import styles from "@styles/menubar.module.scss";
import { navItems } from "../../../common/Utils/utils";

export default function Menubar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {navItems?.map((item,index) => (
          <div key={`${item?.title}_${index}`} className={styles.navItemBox}>
            <div className={styles.navItemBox}>
              <a href={item?.link} className={styles.navLink}>{item?.title}</a>
            </div>
            {item?.hr && <div className={styles.hr}></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
