import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, style = null, onclick = null }) => {
  return (
    <button style={style} className={styles.button} onClick={onclick}>
      {children}
    </button>
  );
};
