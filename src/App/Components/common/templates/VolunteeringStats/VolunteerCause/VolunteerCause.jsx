import React from "react";
import { Button } from "../../../Atom/button/Button";
import styles from "./VolunteerCause.module.css";
import first from "../../../../../../Assets/img/first.PNG";
import second from "../../../../../../Assets/img/second.PNG";
import third from "../../../../../../Assets/img/third.PNG";
import fourth from "../../../../../../Assets/img/fourth.PNG";
import fifth from "../../../../../../Assets/img/fifth.PNG";
export const VolunteerCause = () => {
  return (
    <div className={styles.VolunteerCause}>
      <p className={styles.first_para}>
        You have volunteered for <b>1/9</b> causes.
      </p>

      <div className={styles.do_or_dont}>
        <div className={styles.left_side}>
          <p>Causes you have volunteered for:</p>
          <div className={styles.listItem}>
            {" "}
            <div className={styles.imageWrapper}>
              <img src={first} alt="" />
            </div>
            <p>Advocacy & Human Rights</p>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageWrapper}>
              <img src={second} alt="" />
            </div>
            <p>Board Development</p>
          </div>
        </div>
        <div className={styles.right_side}>
          <p>Causes you haven’t volunteered for:</p>
          <div className={styles.listItem}>
            {" "}
            <div className={styles.imageWrapper}>
              <img src={third} alt="" />
            </div>
            <p>Hunger</p>
          </div>
          <div className={styles.listItem}>
            {" "}
            <div className={styles.imageWrapper}>
              <img src={fourth} alt="" />
            </div>
            <p>Justice & Legal</p>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageWrapper}>
              <img src={fifth} alt="" />
            </div>
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
