import React from "react";
import logo from "../../../../../Assets/img/logo.svg";
import styles from "./Header.module.css";
export const HeaderNoOption = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.img} />
    </header>
  );
};
