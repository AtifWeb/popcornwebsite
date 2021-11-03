import React from "react";
import styles from "../../Assets/styles/pages/GeneralAccount.module.css";
import stylesRelate from "../../Assets/styles/pages/VolunteeringStates.module.css";
import Header from "../Components/Header";

import { VolunteerCause } from "../../App/Components/common/templates/VolunteeringStats/VolunteerCause/VolunteerCause";
import { LocalHeaderItems } from "../../App/helper/constant/Localheader";
import { LocalHeader } from "../Components/common/Organizer/LocalHeader/LocalHeader";
import { Button } from "../Components/common/Atom/button/Button";

export const VolunteeringStats = () => {
  return (
    <div className={styles.GeneralAccount}>
      {/* Header */}
      <Header />

      <LocalHeader list={LocalHeaderItems} active="Volunteering Stats" />

      <div className={styles._container}>
        <h1 className={`${styles.main_heading} ${stylesRelate.main_heading}`}>
          Welcome Atif Asim
        </h1>

        <p className={stylesRelate.first_para}>
          You have volunteered <b>3</b> times.
        </p>

        <VolunteerCause />

        <div className={stylesRelate.last_wrapper}>
          <p className={stylesRelate.last_para}>
            You have volunteered for <b>2</b> charities.
          </p>

          <Button style={{ width: 210, fontSize: "16px", marginTop: 20 }}>
            Find an opportunity
          </Button>
        </div>
      </div>
    </div>
  );
};
