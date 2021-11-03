import React from "react";
import styles from "./BasicInfo.module.css";
import { FloatingInput } from "../../../Atom/FloatingInput/FloatingInput";
import { Button } from "../../../Atom/button/Button";

export const BasicInfo = () => {
  return (
    <div className={styles.BasicInfo} id="basic_info">
      <h2 className={styles.heading_2}>Basic Info</h2>

      <div className={styles.inputWrappers}>
        <div className={styles.grid_two}>
          <FloatingInput type="text" label="First Name*" />
        </div>
        <div className={styles.grid_two}>
          <FloatingInput type="text" label="Last Name*" />
        </div>
        <div className={styles.grid_three}>
          <select name="" id="" className={styles.select}>
            <option value="">Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className={styles.grid_three}>
          <FloatingInput type="text" label="Address line 1*" />
        </div>
        <div className={styles.grid_three}>
          <FloatingInput type="text" label="Address line 2*" />
        </div>
        <div className={styles.grid_two}>
          <FloatingInput type="text" label="Postcode*" />
        </div>
        <div className={styles.grid_two}>
          <FloatingInput type="text" label="Town/City*" />
        </div>
        <div className={styles.grid_three}>
          <select name="" id="" className={styles.select}>
            <option value="">Country/Region *</option>
          </select>
        </div>
        <div className={styles.grid_one}>
          <FloatingInput type="text" label="Day*" />
        </div>
        <div className={styles.grid_one}>
          <select name="" id="" className={styles.select}>
            <option value="">Month*</option>
          </select>
        </div>
        <div className={styles.grid_one}>
          <FloatingInput type="text" label="Year*" />
        </div>{" "}
        <div className={styles.grid_three}>
          <FloatingInput type="text" label="Phone Number" />
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
