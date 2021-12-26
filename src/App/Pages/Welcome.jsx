import React from "react";
import { HeaderNoOption } from "../Components/common/Organizer/Header/HeaderNoOption";
import styles from "../../Assets/styles/pages/Welcome.module.css";
import { Button } from "../Components/common/Atom/button/Button";
import { useHistory } from "react-router-dom";
export const Welcome = ({ headtext, simpletext, buttonText, linkButton }) => {
  const history = useHistory();
  return (
    <div className={styles.Welcome}>
      <HeaderNoOption />

      <div className={styles._container}>
        <h1 className={styles.main_heading}>{headtext}</h1>
        <p className={styles.main_para}>{simpletext}</p>
        <Button
          style={{ width: 220,    paddingTop: '1rem' }}
          onclick={(e) => history.push(linkButton)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
