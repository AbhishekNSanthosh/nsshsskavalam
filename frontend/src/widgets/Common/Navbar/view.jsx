import React from "react";
import styles from "@styles/navbar.module.scss";
import Image from "next/image";
import { logos } from "../../../common/Utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMapLocation,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {!logos?.nssLogoWebP ? 
            <div className={styles.logoFake}></div>
          :
          // <Image
          //   src="/images/logo1.jpg"
          //   height={1000}
          //   width={1000}
          //   alt="NSS LOGO"
          //   className={styles.logoImage}
          // />
          <NssLogo/>
          }
          <div className={styles.titleBox}>
            <span className={styles.title}>NSS Higher Secondary School </span>
            <span className={styles.subTitle}>Kavalam, Alappuzha </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightItem}>
            <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
            <div className={styles.innerBox}>
              <div className={styles.numberBox}>
                <span className={styles.numberTitle}>9:00</span>
                <span className={styles.infoTitle}>AM</span>
                &nbsp;
                <span className={styles.infoTitle}> - </span>
                &nbsp;
                <span className={styles.numberTitle}>5:00</span>
                <span className={styles.infoTitle}>PM</span>
              </div>
              <span className={styles.infoSubTitle}>Monday to Saturday</span>
            </div>
          </div>
          <div className={styles.rightItem}>
            <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
            <div className={styles.innerBox}>
              <span className={styles.infoTitle}>Call us</span>
              <span className={styles.numberSubTitle}>
                0477 228 8646, &nbsp;0477 228 8548
              </span>
            </div>
          </div>
          <div className={styles.rightItem}>
            <FontAwesomeIcon icon={faMapLocation} className={styles.icon} />
            <div className={styles.innerBox}>
              <span className={styles.infoTitle}>Kavalam</span>
              <span className={styles.infoSubTitle}>
                Alappuzha District, Kerala
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
