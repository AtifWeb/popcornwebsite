import React from "react";
import { Link } from "react-router-dom";
import styles from "./Email.module.css";

export const Email = () => {
  return (
    <div className={styles.BasicInfo} id="Email">
      <h2 className={styles.heading_2}>Email</h2>
      <p className={styles.smallpara}>
        If you wish to change your email address please click ‘change email’.
        You will then be prompted to enter your current password before you can
        change your email address. Once you have changed your email address a
        verification email will be sent to your new email address.
      </p>
      <Link className={styles.link}>
        <p>Email</p>

        <p>Change Email</p>
      </Link>
    </div>
  );
};
