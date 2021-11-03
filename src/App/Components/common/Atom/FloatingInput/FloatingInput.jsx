import React, { useState } from "react";
import styles from "./FloatingInput.module.css";
export const FloatingInput = ({ type, label }) => {
  const [active, setactive] = useState(false);
  const HandleBlurPosition = (e) => {
    e.target.value != "" ? setactive(true) : setactive(false);
  };
  return (
    <div className={styles.FloatingInput}>
      <input
        type={type}
        className={`${styles.input} ${active && styles.activeinput} `}
        onBlur={HandleBlurPosition}
      />{" "}
      <label
        htmlFor=""
        className={`${styles.label} ${active && styles.active}`}
      >
        {label}
      </label>
    </div>
  );
};
