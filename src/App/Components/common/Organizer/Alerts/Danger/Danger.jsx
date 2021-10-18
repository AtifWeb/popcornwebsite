import React from "react";
import styles from "./Danger.module.css";
export const Danger = ({ img = null, text, style = null }) => {
  return (
    <div className={styles.Danger} style={style}>
      {img && <img src={img} alt="" />}
      <p className={styles.text}>{text}</p>
    </div>
  );
};
