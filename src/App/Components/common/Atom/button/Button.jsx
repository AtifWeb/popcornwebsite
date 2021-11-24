import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  style = null,
  onclick = null,
  outline,
  classes,
}) => {
  return (
    <button
      style={style}
      className={`${styles.button} ${
        outline == true && styles.outline
      } ${classes}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
