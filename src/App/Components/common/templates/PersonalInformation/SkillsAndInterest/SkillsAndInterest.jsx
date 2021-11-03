import React from "react";
import styles from "./SkillsAndInterest.module.css";
import { FloatingInput } from "../../../Atom/FloatingInput/FloatingInput";
import { Button } from "../../../Atom/button/Button";

export const SkillsAndInterest = () => {
  return (
    <div className={styles.BasicInfo} id="Skills">
      <h2 className={styles.heading_2}>Your Skills and Interests</h2>

      <div className={styles.inputWrappers}>
        <div className={styles.grid_three}>
          <FloatingInput type="text" label="Occupation" />
        </div>{" "}
        <div className={styles.grid_three}>
          <FloatingInput type="text" label="Languages" />
        </div>{" "}
        <div className={styles.grid_three}>
          <textarea
            name=""
            id=""
            placeholder="Your Skills and Interests."
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
        </div>
      </div>

      <div className={styles.buttonsWrapper}>
        <Button
          style={{
            width: "100%",

            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
            fontSize: "16px",
          }}
        >
          Discard Changes
        </Button>
        <Button
          style={{
            width: "100%",

            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
            fontSize: "16px",
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
