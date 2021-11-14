import React from "react";
import { Button } from "../../../Atom/button/Button";
import styles from "./SignOut.module.css";
export const SignOut = () => {
  return (
    <div className={styles.SignOut}>
      <h2 className={styles.sub_heading}>Sign Out</h2>
      <div className={styles.buttonWrapper}>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
          }}
          outline={true}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};
