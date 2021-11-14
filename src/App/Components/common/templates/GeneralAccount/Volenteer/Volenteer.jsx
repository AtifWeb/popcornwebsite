import React from "react";
import { Button } from "../../../Atom/button/Button";
import styles from "./Volenteer.module.css";
export const Volenteer = () => {
  return (
    <div className={styles.voulenteer}>
      <h2 className={styles.sub_heading}>You have volunteered X times.</h2>
      <div className={styles.buttonWrapper}>
        <Button>Find an opportunity</Button>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
          }}
          outline={true}
        >
          Volunteering Stats
        </Button>
      </div>
    </div>
  );
};
