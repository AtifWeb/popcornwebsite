import React from "react";
import styles from "../../Assets/styles/pages/GeneralAccount.module.css";
import Header from "../Components/Header";
import { LocalHeaderItems } from "../../App/helper/constant/Localheader";
import { LocalHeader } from "../Components/common/Organizer/LocalHeader/LocalHeader";
import { Danger } from "../Components/common/Organizer/Alerts/Danger/Danger";
import { HelperMessage } from "../Components/common/templates/GeneralAccount/HelperMessage/HelperMessage";
import { Volenteer } from "../Components/common/templates/GeneralAccount/Volenteer/Volenteer";
import { PersonalInfo } from "../Components/common/templates/GeneralAccount/PersonalInfo/PersonalInfo";
import { SignOut } from "../Components/common/templates/GeneralAccount/SignOut/SignOut";
export const GeneralAccount = () => {
  return (
    <div className={styles.GeneralAccount}>
      {/* Header */}
      <Header />

      <LocalHeader list={LocalHeaderItems} active="General" />

      <div className={styles._container}>
        <h1 className={styles.main_heading}>Welcome Atif Asim</h1>
        <HelperMessage />
        <Volenteer />
        <PersonalInfo />
        <SignOut />
      </div>
    </div>
  );
};
