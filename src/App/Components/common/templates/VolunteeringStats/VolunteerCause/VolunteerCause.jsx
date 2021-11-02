import React from "react";
import { Button } from "../../../Atom/button/Button";
import styles from "./VolunteerCause.module.css";
export const VolunteerCause = () => {
  return (
    <div className={styles.VolunteerCause}>
      <p className={styles.first_para}>
        You have volunteered for <b>1/9</b> causes.
      </p>

      <div className={styles.do_or_dont}>
        <div className={styles.left_side}>
          <p>Causes you have volunteered for:</p>
          <div>
            <p>Advocacy & Human Rights</p>
          </div>
          <div>
            <p>Board Development</p>
          </div>
        </div>
        <div className={styles.right_side}>
          <p>Causes you haven’t volunteered for:</p>
          <div>
            <p>Hunger</p>
          </div>
          <div>
            <p>Justice & Legal</p>
          </div>
          <div>
            <p>People with Disabilities</p>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button style={{ width: 210, fontSize: "16px" }}>
          Find an opportunity
        </Button>
      </div>
    </div>
  );
};
