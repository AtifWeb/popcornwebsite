import React from "react";
import { Link } from "react-router-dom";
import styles from "./Password.module.css";

export const Password = () => {
  return (
    <div className={styles.BasicInfo} id="Password">
      <h2 className={styles.heading_2}>Password</h2>
      <p className={styles.smallpara}>
        If you wish to change your password click ‘change password’. You will
        then be prompted enter your current password before you can change your
        password . If you have forgotten your password then click ‘forgotten
        password’ and an email will be sent to your email account with
        instructions on how to reset your password.
      </p>

      <Link className={styles.link}>
        <p>Current Password</p>

        <p>Change Password</p>
      </Link>
    </div>
  );
};
