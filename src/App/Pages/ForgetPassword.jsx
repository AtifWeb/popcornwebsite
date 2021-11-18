import React, { useState } from "react";
import { HeaderNoOption } from "../Components/common/Organizer/Header/HeaderNoOption";
import styles from "../../Assets/styles/pages/Welcome.module.css";
import { Button } from "../Components/common/Atom/button/Button";
import { Link, useHistory } from "react-router-dom";
import { Danger } from "../Components/common/Organizer/Alerts/Danger/Danger";
export const ForgetPassword = () => {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.Welcome}>
      <HeaderNoOption />

      <div className={styles.back_link_wrapper}>
        <div className={styles.content_back_link}>
          <div
            className={styles.back_pure_link}
            onClick={(e) => {
              history.push("/GeneralAccount");
            }}
          >
            <i class="fas fa-arrow-left" style={{ paddingTop: "3px" }}></i>
            <p className={styles.back_link_para}>Password</p>
          </div>
        </div>
      </div>
      <div className={`${styles._container} ${styles.forget_container}`}>
        <h1 className={styles.main_heading}>Forgotten Password</h1>
        <p className={styles.main_para}>
          A password reset email has been sent to {"<email address>"}. Please
          follow the instructions in the email to reset your password.
        </p>
        <p className={styles.main_para}>
          Didn’t receive an email? We can send you{" "}
          <span className={styles.span_new} onClick={(e) => setClicked(true)}>
            a new one
          </span>
        </p>
        {clicked && (
          <Danger
            text="A password reset email has been sent to mytechlife96@gmail.com.
             Please follow the instructions in the email to reset your password."
            style={{ marginTop: 10, background: "#F75524" }}
          />
        )}
      </div>
    </div>
  );
};
