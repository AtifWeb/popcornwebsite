import React, { useState, useEffect } from "react";
import styles from "../../Assets/styles/pages/GeneralAccount.module.css";
import stylesRelate from "../../Assets/styles/pages/PersonalInformation.module.css";
import Header from "../Components/Header";

import { LocalHeaderItems } from "../../App/helper/constant/Localheader";
import { LocalHeader } from "../Components/common/Organizer/LocalHeader/LocalHeader";
import { Button } from "../Components/common/Atom/button/Button";
import { BasicInfo } from "../Components/common/templates/PersonalInformation/BasicInfo/BasicInfo";
import { SkillsAndInterest } from "../Components/common/templates/PersonalInformation/SkillsAndInterest/SkillsAndInterest";
import { Email } from "../Components/common/templates/PersonalInformation/Email/Email";
import { Password } from "../Components/common/templates/PersonalInformation/Password/Password";

export const PersonalInformation = () => {
  const [Active, setActive] = useState("basic_info_link");
  const HandleLink = (e) => {
    e.target.id == "basic_info_link" && setActive("basic_info_link");
    e.target.id == "Skills_link" && setActive("Skills_link");
    e.target.id == "Email_link" && setActive("Email_link");
    e.target.id == "Password_link" && setActive("Password_link");
  };

  return (
    <div className={styles.GeneralAccount}>
      {/* Header */}
      <Header />

      <LocalHeader list={LocalHeaderItems} active="Personal Information" />

      <div className={styles._container}>
        <nav className={stylesRelate.sidebar_nav}>
          <li>
            <a
              href="#basic_info"
              className={`${
                Active == "basic_info_link" && stylesRelate.active
              }`}
              id="basic_info_link"
              onClick={HandleLink}
            >
              Basic Info
            </a>
          </li>{" "}
          <li>
            <a
              href="#Skills"
              id="Skills_link"
              onClick={HandleLink}
              className={`${Active == "Skills_link" && stylesRelate.active}`}
            >
              Your Skills and Interests
            </a>
          </li>{" "}
          <li>
            <a
              href="#Email"
              id="Email_link"
              onClick={HandleLink}
              className={`${Active == "Email_link" && stylesRelate.active}`}
            >
              Email
            </a>
          </li>{" "}
          <li>
            <a
              href="#Password"
              id="Password_link"
              onClick={HandleLink}
              className={`${Active == "Password_link" && stylesRelate.active}`}
            >
              Password
            </a>
          </li>
        </nav>
        <div className={stylesRelate.top_area}>
          <h1 className={`${styles.main_heading} ${stylesRelate.main_heading}`}>
            Personal Information
          </h1>
          <p className={stylesRelate.first_para}>
            You are missing information in the following sections:{" "}
            <a href="#">Basic info,</a> <a href="#">Your Skills</a>{" "}
            <a href="#">Interests.</a>
          </p>
        </div>

        <BasicInfo />
        <SkillsAndInterest />
        <Email />
        <Password />
      </div>
    </div>
  );
};
