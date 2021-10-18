import React from "react";
import { HeaderNoOption } from "../Components/common/Organizer/Header/HeaderNoOption";
import styles from "../../Assets/styles/pages/Welcome.module.css";
import { Button } from "../Components/common/Atom/button/Button";
import { useHistory } from "react-router-dom";
export const Welcome = () => {
  const history = useHistory();
  return (
    <div className={styles.Welcome}>
      <HeaderNoOption />

      <div className={styles._container}>
        <h1 className={styles.main_heading}>Welcome to Cyber Volunteer</h1>
        <p className={styles.main_para}>
          You have created a Cyber Volunteers account. A verification email has
          been sent to mytechlife86@gmail.com. Please verify your email to be
          able to sign up for volunteering opportunities.
        </p>
        <Button
          style={{ width: 220 }}
          onclick={(e) => history.push("/GeneralAccount")}
        >
          GO TO MY ACCOUNT
        </Button>
      </div>
    </div>
  );
};
