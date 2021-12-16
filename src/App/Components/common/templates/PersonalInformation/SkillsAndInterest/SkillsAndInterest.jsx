import React, { useEffect, useState } from "react";
import styles from "./SkillsAndInterest.module.css";
import { FloatingInput } from "../../../Atom/FloatingInput/FloatingInput";
import { Button } from "../../../Atom/button/Button";
import { EventHandle } from "../BasicInfo/input_handle";

export const SkillsAndInterest = () => {
  const [TextAreaActive, setTextAreaActive] = useState(false);
  useEffect(() => {
    EventHandle();

    const HandleAllCheck = (e) => {
      let FirstInput = document.querySelector(".first_input_skill input");
      let SecondInput = document.querySelector(".second_input_skill input");
      let TextArea = document.querySelector("textarea");
      if (
        FirstInput.value != "" &&
        SecondInput.value != "" &&
        TextArea.value != ""
      ) {
        document.querySelector(".skill_save_two").classList.add("active");
      } else {
        document.querySelector(".skill_save_two").classList.remove("active");
      }
    };

    document
      .querySelectorAll(".basic_info_skill input")
      .forEach((EachInput) => {
        EachInput.addEventListener("keyup", HandleAllCheck);
      });
    document
      .querySelectorAll(".basic_info_skill textarea")
      .forEach((EachInput) => {
        EachInput.addEventListener("keyup", HandleAllCheck);
      });
  }, []);
  return (
    <div className={`${styles.BasicInfo} basic_info_skill`} id="Skills">
      <h2 className={styles.heading_2}>Your Skills and Interests</h2>

      <div className={styles.inputWrappers}>
        <div className={`${styles.grid_three} first_input_skill`}>
          <FloatingInput type="text" label="Occupation" />{" "}
          <small className={styles.helperMessage}>Invalid Occupation</small>
        </div>{" "}
        <div className={`${styles.grid_three} second_input_skill`}>
          <FloatingInput type="text" label="Languages" />{" "}
          <small className={styles.helperMessage}>Invalid Languages</small>
        </div>{" "}
        <div
          className={`${styles.grid_three} ${styles.textareaWrapper} ${
            TextAreaActive == true && styles.text_area_active
          }`}
        >
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value != "") {
                setTextAreaActive(true);
              } else {
                setTextAreaActive(false);
              }
            }}
            onBlur={(e) => {
              if (e.target.value != "") {
                e.target.style.borderColor = "#212121";
              } else {
                e.target.style.borderColor = "#cecece";
              }
            }}
            className={styles.textArea}
          ></textarea>
          <label htmlFor="">Your Skills and Interests.</label>
        </div>
      </div>

      <div className={styles.buttonsWrapper}>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
          }}
          outline={true}
        >
          Discard Changes
        </Button>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#333",
            borderColor: "#484848",
          }}
          classes="skill_save_two"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
