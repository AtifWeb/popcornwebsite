import React, { useEffect } from "react";
import { Button } from "../../../Atom/button/Button";
import styles from "./PersonalInfo.module.css";
import { Fields } from "./types";
export const PersonalInfo = () => {
  const AddAddintional = (EachRight) => {
    if (EachRight.offsetWidth < EachRight.scrollWidth) {
      EachRight.classList.add("active");
    } else {
      EachRight.classList.remove("active");
    }
  };
  useEffect(() => {
    let FeildRights = document.querySelectorAll(".feild_right");

    FeildRights.forEach((EachRight) => {
      AddAddintional(EachRight);
    });

    window.addEventListener("resize", (e) => {
      FeildRights.forEach((EachRight) => {
        AddAddintional(EachRight);
      });
    });
  }, []);
  return (
    <div className={styles.PersonalInfo}>
      <h2 className={styles.sub_heading}>Your Personal Information.</h2>
      <p className={styles.helper_message}>
        Your personal information is incomplete. Tell charities more about
        yourself by completing your{" "}
        <a href="#" className={styles.highlighted_text}>
          account information.
        </a>
      </p>{" "}
      <small className={styles.info_message}>* denotes a required field</small>
      {Fields.map((Field) => (
        <div className={styles.fieldWrapper}>
          <label className={styles.fieldWrapperlabel}>{Field.left}</label>
          <p className={`${styles.fieldWrapperinput} feild_right`}>
            {Field.right}
          </p>
        </div>
      ))}
      <div className={styles.button_wrapper}>
        <Button
          style={{
            marginTop: 30,
            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
          }}
          outline={true}
        >
          Edit Personal Info
        </Button>
      </div>
    </div>
  );
};
