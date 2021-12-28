import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import styles from "../Components/common/templates/PersonalInformation/SkillsAndInterest/SkillsAndInterest.module.css";
import logo from "../../Assets/img/logo.svg";
import "../../Assets/styles/css/Signin.css";
import { countries, months, smallMonths } from "../../Assets/js/Utils";
import { HandleTextValidation } from "../../Assets/js/ValidationOrganizationInfo";

import "../../Assets/styles/css/Signup.css";

import { makeStyles } from "@material-ui/core/styles";

import "../../Assets/styles/css/SelectBox.css";
import "../../Assets/styles/css/resultsWrapper.css";
import "../../Assets/styles/css/header.css";
import "../../Assets/styles/css/Form.css";
import "../../Assets/styles/css/body.css";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function OrganizationMission() {
  const classes = useStyles();
  const [TextAreaActive, setTextAreaActive] = useState(false);
  const [TextAreaActive2, setTextAreaActive2] = useState(false);
  const [TextAreaActive3, setTextAreaActive3] = useState(false);
  const [safeguarding, setsafeguarding] = useState(false);
  const [trainingExp, settrainingExp] = useState(false);
  const [adults, setadults] = useState(false);

  useEffect(() => {
    document
      .querySelectorAll(".typing-start-result .firstpart .row")
      .forEach((Each) =>
        Each.addEventListener("click", (e) => {
          e.target.classList.add("blue_bg");
          setTimeout(() => {
            e.target.classList.remove("blue_bg");
          }, 200);

          setTimeout(() => {
            document.querySelector(
              ".typing-start-result .firstpart"
            ).style.display = "none";

            document.querySelector(
              ".typing-start-result .secondpart"
            ).style.display = "block";

            document.querySelector("#address").focus();
          }, 500);
        })
      );

    document
      .querySelectorAll(".typing-start-result .secondpart .row")
      .forEach((Each) => {
        Each.addEventListener("click", (e) => {
          e.target.classList.add("blue_bg");
          let location = e.target.querySelector("small");
          let Address1 = document.querySelector("#address1");
          let Adress = document.querySelector("#address");
          let label = Address1.parentNode.previousElementSibling;
          let BorderElement = Address1.nextElementSibling;

          label.style.color = "#000";
          BorderElement.style.borderColor = "#000";
          setTimeout(() => {
            e.target.classList.remove("blue_bg");
          }, 200);
          setTimeout(() => {
            document.querySelector(".address-wrapper").style.display = "none";
            document.querySelector(".result-wrapper").style.display = "none";
            document.querySelector(".expand-address").classList.add("active");
            document.querySelector(".country-select").style.marginTop = "-16px";
            document.querySelector(".personal-info-wrapper").style.marginTop =
              "5px";
          }, 500);
          Address1.value = location.textContent;
        });
      });
  }, []);

  const RemoveMessages = (e) => {
    let BorderElement = e.target.nextElementSibling;
    let Label = e.target.parentNode.previousElementSibling;
    let HelperElement = "";

    HelperElement = e.target.parentNode.parentNode.nextElementSibling;

    BorderElement.style.border = "1px solid rgba(0, 0, 0, 0.23)";
    Label.style.color = "rgba(0, 0, 0, 0.23)";

    if (e.target.id == "fname" || e.target.id == "lname") {
      HelperElement.style.marginBottom = "10px";
    }

    HelperElement.classList.remove("day-active");
  };

  const CheckIsValid = (e) => {
    let BorderElement = e.target.nextElementSibling;
    let Label = e.target.parentNode.previousElementSibling;
    let ParentElement = e.target.parentNode.parentNode;
    let email =
      /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,8})(\.[a-z]{1,8})?(\.[a-z]{1,8})?$/;
    let password = /^[\d\w\$#@&%!^*-]{8,26}$/i;
    let HelperElement = "";

    HelperElement = e.target.parentNode.parentNode.nextElementSibling;

    if (e.target.value == "") {
      BorderElement.style.border = "1px solid red";
      Label.style.color = "red";

      if (e.target.id == "fname" || e.target.id == "lname") {
        HelperElement.style.marginBottom = "20px";
      }

      if (HelperElement.classList[1] == "email-helper") {
        HelperElement.textContent = "Please enter the email";
      } else if (HelperElement.classList[1] == "password-helper") {
        HelperElement.textContent = "Please enter the password";
        if (e.target.id == "password") {
        }
      }
    } else {
      Label.style.color = "#000";
      BorderElement.style.border = "1px solid #000";

      HelperElement = e.target.parentNode.parentNode.nextElementSibling;
      HelperElement.textContent = "";
    }
    if (e.target.value == "") {
      let ElementId = e.target.id;
      BorderElement.style.border = "1px solid red";
      Label.style.color = "red";
      if (ElementId == "fname") {
        HelperElement.textContent = "Invalid Link";
      } else if (ElementId == "lname") {
        HelperElement.textContent = "Invalid Name";
      } else if (ElementId == "email_name") {
        HelperElement.textContent = "Invalid Email";
      } else if (ElementId == "Description") {
        HelperElement.textContent = "Invalid Organization Description";
      }
    }
  };

  return (
    <div className="SignUp">
      <div className="sign-in-header">
        <img src={logo} alt="" />
      </div>
      <div className="body-area">
        <form action="" className="outer-form">
          <p className="create-account-message">
            Tell us about your organisation and your mission
          </p>

          <div
            className={`${styles.grid_three} ${styles.textareaWrapper} ${
              TextAreaActive == true && styles.text_area_active
            }`}
            style={{ marginTop: "2rem" }}
          >
            <textarea
              name=""
              id="Description"
              cols="30"
              rows="10"
              onFocus={(e) => {
                let HelperElement =
                  e.target.nextElementSibling.nextElementSibling;
                HelperElement.textContent = "";
              }}
              onChange={(e) => {
                if (e.target.value != "") {
                  setTextAreaActive(true);
                } else {
                  setTextAreaActive(false);
                }
              }}
              onBlur={(e) => {
                let HelperElement =
                  e.target.nextElementSibling.nextElementSibling;
                if (e.target.value != "") {
                  e.target.style.borderColor = "#212121";
                } else {
                  e.target.style.borderColor = "#cecece";
                  HelperElement.textContent =
                    "Invalid Organization Description";
                }
              }}
              className={styles.textArea}
            ></textarea>
            <label htmlFor="">Organisation Description</label>

            <span
              style={{
                marginBottom: "10px",
                display: "inline-block",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>
          </div>

          <div
            className={`${styles.grid_three} ${styles.textareaWrapper} ${
              TextAreaActive2 == true && styles.text_area_active
            }`}
            style={{ marginTop: ".5rem" }}
          >
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onFocus={(e) => {
                let HelperElement =
                  e.target.nextElementSibling.nextElementSibling;
                HelperElement.textContent = "";
              }}
              onChange={(e) => {
                if (e.target.value != "") {
                  setTextAreaActive2(true);
                } else {
                  setTextAreaActive2(false);
                }
              }}
              onBlur={(e) => {
                let HelperElement =
                  e.target.nextElementSibling.nextElementSibling;
                if (e.target.value != "") {
                  e.target.style.borderColor = "#212121";
                } else {
                  e.target.style.borderColor = "#cecece";
                  HelperElement.textContent = "Invalid Mission Statement";
                }
              }}
              className={styles.textArea}
            ></textarea>
            <label htmlFor="">Mission Statement</label>

            <span
              style={{
                marginBottom: "10px",
                display: "inline-block",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>
          </div>

          <div className="input-collection" style={{ marginTop: 0 }}>
            <div
              className="organization_logo_desc"
              style={{ marginTop: ".5rem" }}
            >
              <p style={{ fontSize: 15, color: "#666666" }}>
                Does your charity work with under 18s or adults to which
                safeguarding applies?
              </p>
              <div className="desc_wrapper">
                <div
                  className="checkbox-wrapper password-checkbox-wrapper"
                  style={{ marginBottom: 20 }}
                >
                  <input
                    type="radio"
                    name="charity"
                    id="yes-charity"
                    onClick={(e) => setadults(true)}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="yes-charity" id="forget-password-wrapper">
                    <label
                      htmlFor="yes-charity"
                      className="custom-checkbox custom-checkbox-box show-password-label"
                    >
                      <i class="fas fa-check"></i>
                    </label>
                    <p>Yes</p>
                  </label>
                </div>
                <div
                  className="checkbox-wrapper password-checkbox-wrapper"
                  style={{ marginBottom: 20 }}
                >
                  <input
                    type="radio"
                    name="charity"
                    id="No-charity"
                    onClick={(e) => setadults(false)}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="No-charity" id="forget-No-wrapper">
                    <label
                      htmlFor="No-charity"
                      className="custom-checkbox custom-checkbox-box show-password-label"
                    >
                      <i class="fas fa-check"></i>
                    </label>
                    <p>No</p>
                  </label>
                </div>
              </div>
            </div>
            {adults && (
              <>
                <div
                  className="organization_logo_desc"
                  style={{ marginTop: ".5rem" }}
                >
                  <p style={{ fontSize: 15, color: "#666666" }}>
                    Does your organisation have safeguarding policies and
                    procedures which are regularly updated and followed by all
                    in your organisation?
                  </p>
                  <div className="desc_wrapper">
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="organisation"
                        id="yes-organisation"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="yes-organisation"
                        id="forget-password-wrapper"
                      >
                        <label
                          htmlFor="yes-organisation"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Yes</p>
                      </label>
                    </div>
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="organisation"
                        id="No-organisation"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="No-organisation" id="forget-No-wrapper">
                        <label
                          htmlFor="No-organisation"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>No</p>
                      </label>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    color: "#666666",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Please provide a link to your safeguarding policy below:
                </p>

                <TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  onChange={HandleTextValidation}
                  id="fname"
                  label="Link"
                  autocomplete="on"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                <span
                  className="helping-text text-helper"
                  style={{
                    marginBottom: "10px",
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>

                <div
                  className="organization_logo_desc"
                  style={{ marginTop: ".5rem" }}
                >
                  <p style={{ fontSize: 15, color: "#666666" }}>
                    Do all staff and volunteers who work with young people
                    receive safeguarding training?
                  </p>
                  <div className="desc_wrapper">
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="training"
                        id="yes-training"
                        onClick={(e) => settrainingExp(false)}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="yes-training"
                        id="forget-password-wrapper"
                      >
                        <label
                          htmlFor="yes-training"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Yes</p>
                      </label>
                    </div>
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="training"
                        onClick={(e) => settrainingExp(false)}
                        id="No-training"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="No-training" id="forget-No-wrapper">
                        <label
                          htmlFor="No-training"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>No</p>
                      </label>
                    </div>

                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="training"
                        onClick={(e) => settrainingExp(true)}
                        id="Other-training"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="Other-training" id="forget-No-wrapper">
                        <label
                          htmlFor="Other-training"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Other</p>
                      </label>
                    </div>
                  </div>
                </div>
                {trainingExp && (
                  <>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#666666",
                        marginBottom: "1rem",
                      }}
                    >
                      If your answer is ‘Other’, please explain below:
                    </p>

                    <div
                      className={`${styles.grid_three} ${
                        styles.textareaWrapper
                      } ${TextAreaActive3 == true && styles.text_area_active}`}
                      style={{ marginTop: "1rem" }}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onFocus={(e) => {
                          let HelperElement =
                            e.target.nextElementSibling.nextElementSibling;
                          HelperElement.textContent = "";
                        }}
                        onChange={(e) => {
                          if (e.target.value != "") {
                            setTextAreaActive3(true);
                          } else {
                            setTextAreaActive3(false);
                          }
                        }}
                        onBlur={(e) => {
                          let HelperElement =
                            e.target.nextElementSibling.nextElementSibling;
                          if (e.target.value != "") {
                            e.target.style.borderColor = "#212121";
                          } else {
                            e.target.style.borderColor = "#cecece";
                            HelperElement.textContent = "Invalid Explanation";
                          }
                        }}
                        className={styles.textArea}
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="">Explanation</label>

                      <span
                        style={{
                          marginBottom: "10px",
                          display: "inline-block",
                          marginTop: 7,
                          fontSize: 13,
                          paddingLeft: 12,
                          color: "#F65B4E",
                        }}
                      ></span>
                    </div>
                  </>
                )}

                <div
                  className="organization_logo_desc"
                  style={{ marginTop: ".5rem" }}
                >
                  <p style={{ fontSize: 15, color: "#666666" }}>
                    Does your charity have an appointed safeguarding lead?
                  </p>
                  <div className="desc_wrapper">
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="appointed"
                        id="yes-appointed"
                        onClick={(e) => setsafeguarding(true)}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="yes-appointed"
                        id="forget-password-wrapper"
                      >
                        <label
                          htmlFor="yes-appointed"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Yes</p>
                      </label>
                    </div>
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="appointed"
                        id="No-appointed"
                        onClick={(e) => setsafeguarding(false)}
                        style={{ display: "none" }}
                      />
                      <label htmlFor="No-appointed" id="forget-No-wrapper">
                        <label
                          htmlFor="No-appointed"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>No</p>
                      </label>
                    </div>
                  </div>
                </div>
                {safeguarding && (
                  <>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#666666",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      Name of safeguarding lead:
                    </p>

                    <TextField
                      onBlur={CheckIsValid}
                      onFocus={RemoveMessages}
                      onChange={HandleTextValidation}
                      id="lname"
                      label="Name"
                      autocomplete="on"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                    <span
                      className="helping-text text-helper"
                      style={{
                        marginBottom: "10px",
                        display: "inline-block",
                        marginTop: 7,
                        fontSize: 13,
                        paddingLeft: 12,
                        color: "#F65B4E",
                      }}
                    ></span>

                    <p
                      style={{
                        fontSize: 15,
                        color: "#666666",

                        marginBottom: "1rem",
                      }}
                    >
                      Email of safeguarding lead:
                    </p>

                    <TextField
                      onBlur={CheckIsValid}
                      onFocus={RemoveMessages}
                      onChange={HandleTextValidation}
                      id="email_name"
                      label="Email"
                      autocomplete="on"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                    <span
                      className="helping-text text-helper"
                      style={{
                        marginBottom: "10px",
                        display: "inline-block",
                        marginTop: 7,
                        fontSize: 13,
                        paddingLeft: 12,
                        color: "#F65B4E",
                      }}
                    ></span>
                  </>
                )}
                <div
                  className="organization_logo_desc"
                  style={{ marginTop: ".5rem" }}
                >
                  <p style={{ fontSize: 15, color: "#666666" }}>
                    Does your organisation have a system for managing concerns
                    or complaints relating to safeguarding?
                  </p>
                  <div className="desc_wrapper">
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="system"
                        id="yes-system"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="yes-system" id="forget-password-wrapper">
                        <label
                          htmlFor="yes-system"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Yes</p>
                      </label>
                    </div>
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="system"
                        id="No-system"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="No-system" id="forget-No-wrapper">
                        <label
                          htmlFor="No-system"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>No</p>
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="organization_logo_desc"
                  style={{ marginTop: ".5rem" }}
                >
                  <p style={{ fontSize: 15, color: "#666666" }}>
                    Does your organisation have clear policies about DBS
                    (Disclosure and Barring Service) checks?
                  </p>
                  <div className="desc_wrapper">
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="charity"
                        id="yes-Disclosure"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="yes-Disclosure"
                        id="forget-password-wrapper"
                      >
                        <label
                          htmlFor="yes-Disclosure"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>Yes</p>
                      </label>
                    </div>
                    <div
                      className="checkbox-wrapper password-checkbox-wrapper"
                      style={{ marginBottom: 20 }}
                    >
                      <input
                        type="radio"
                        name="charity"
                        id="No-Disclosure"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="No-Disclosure" id="forget-No-wrapper">
                        <label
                          htmlFor="No-Disclosure"
                          className="custom-checkbox custom-checkbox-box show-password-label"
                        >
                          <i class="fas fa-check"></i>
                        </label>
                        <p>No</p>
                      </label>
                    </div>
                  </div>
                  <small
                    style={{
                      fontSize: "13px",
                      marginBottom: "1.2rem",
                      display: "block",
                      color: "#F80000",
                    }}
                  >
                    * You need to have all the above things in place if you wish
                    to use Cyber Volunteers to advertise volunteer work with
                    under 18s or adults to which safeguarding applies - if you
                    wish to enquire further email hello@cybervolunteers.org.uk
                  </small>
                </div>
              </>
            )}

            <div className="button-wrapper width_100_button">
              <Button variant="contained" color="primary">
                NEXT
              </Button>
            </div>
          </div>
        </form>
      </div>

      <p style={{ textAlign: "center", color: "#949494", marginBottom: 20 }}>
        © 2021 Cyber Volenteers. All rights reserved.
      </p>
    </div>
  );
}

export default OrganizationMission;
