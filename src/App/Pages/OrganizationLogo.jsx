import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";

import logo from "../../Assets/img/logo.svg";
import "../../Assets/styles/css/Signin.css";
import { countries, months, smallMonths } from "../../Assets/js/Utils";
import { HandleValidation } from "../../Assets/js/HandleValidation";

import "../../Assets/styles/css/Signup.css";

import { makeStyles } from "@material-ui/core/styles";

import "../../Assets/styles/css/SelectBox.css";
import "../../Assets/styles/css/resultsWrapper.css";
import "../../Assets/styles/css/header.css";
import "../../Assets/styles/css/Form.css";
import "../../Assets/styles/css/body.css";
import "../../Assets/styles/css/organizationLogo.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function OrganizationLogo() {
  const classes = useStyles();
  const [FirstName, setFirstName] = useState();
  const [social, setsocial] = useState(false);
  const [LastName, setLastName] = useState();
  const [monthsState, setmonths] = useState([]);
  const [countryState, setcountry] = useState([]);

  useEffect(() => {
    setmonths(months);
    setcountry(countries);

    window.addEventListener("load", (e) => {
      if (window.innerWidth < 500) {
        setmonths(smallMonths);
      }
    });

    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 500) {
        setmonths(smallMonths);
      }
    });

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
        HelperElement.textContent = "Invalid Facebook URL";
      } else if (ElementId == "lname") {
        HelperElement.textContent = "Invalid Linkedin URL";
      }else if (ElementId=="tname"){
        HelperElement.textContent="Invalid Twitter URL"
      }
    }
  };

  return (
    <div className="SignUp">
      <div className="sign-in-header">
        <img src={logo} alt="" />
      </div>
      <div className="body-area">
        <form action="" className="outer-form" >
          <p className="create-account-message">
            Upload your Organisation’s Logo
          </p>{" "}
          <div className="profile_img_area">
            <div className="profile_img_pure">
              <i class="fas fa-file-contract"></i>
            </div>
            <p style={{ color: "#000" }}>
              A good photo helps distinguish your non-profit and generates more
              potential volunteers
            </p>
          </div>
          <div className="button-wrapper width_100_button">
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "0px" }}
            >
              <label
                htmlFor="file_upload"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                UPLOAD
              </label>
              <input
                type="file"
                name=""
                id="file_upload"
                style={{ display: "none" }}
              />
            </Button>
          </div>
          <div className="organization_logo_desc" style={{ marginTop: "1rem" }}>
            <p style={{ fontSize: 15, color: "#666666" }}>
              Do you wish to add links to your organisations social media
              account?
            </p>
            <div className="desc_wrapper">
              <div
                className="checkbox-wrapper password-checkbox-wrapper"
                style={{ marginBottom: 20}}
              >
                <input
                  type="radio"
                  onClick={(e) => {
                    setsocial(true)
                    HandleValidation(e)
                  }}
                  name="selection"
                  id="yes-selection-checkbox"
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="yes-selection-checkbox"
                  id="forget-password-wrapper"
                >
                  <label
                    htmlFor="yes-selection-checkbox"
                    className="custom-checkbox custom-checkbox-box show-password-label"
                  >
                    <i class="fas fa-check"></i>
                  </label>
                  <p>Yes</p>
                </label>
              </div>
              <div
                className="checkbox-wrapper password-checkbox-wrapper"
                style={{ marginBottom: 20}}
              >
                <input
                  type="radio"
                  name="selection"
                  id="no-selection-checkbox"
                  onClick={(e) =>{
                    setsocial(false)
                    HandleValidation(e)
                  }}
                  style={{ display: "none" }}
                />
                <label htmlFor="no-selection-checkbox" id="forget-No-wrapper">
                  <label
                    htmlFor="no-selection-checkbox"
                    className="custom-checkbox custom-checkbox-box show-password-label"
                  >
                    <i class="fas fa-check"></i>
                  </label>
                  <p>No</p>
                </label>
              </div>
            </div>
          </div>
          <div className="input-collection" style={{ marginTop: ".5rem" }}>
            {social && (
              <>
                <TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
              onChange={e=>{
                HandleValidation(e)
              }}
                  id="fname"
                  label="Facebook URL"
                  autocomplete="on"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                <span
                  className="helping-text text-helper"
                  style={{
                    marginBottom: 10,
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>

<TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  onChange={e=>{
                    HandleValidation(e)
                  }}
                  id="lname"
                  label="Linkdin URL"
                  autocomplete="on"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                <span
                  className="helping-text text-helper"
                  style={{
                    marginBottom:10,
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>

<TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  onChange={e=>{
                    HandleValidation(e)
                  }}
                  id="tname"
                  label="Twitter URL"
                  autocomplete="on"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                <span
                  className="helping-text text-helper"
                  style={{
                    marginBottom: 10,
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
              className="checkbox-wrapper password-checkbox-wrapper"
              style={{ marginBottom: 27 }}
            >
              <input
                type="checkbox"
                name="aggreement"
                id="aggreement"
                onClick={e=>{
                  HandleValidation(e)
                }}
                style={{ display: "none" }}
              />
              <label htmlFor="aggreement">
                <label
                  htmlFor="aggreement"
                  className="custom-checkbox custom-checkbox-box show-password-label"
                  style={{ minWidth: 20 }}
                >
                  <i class="fas fa-check"></i>
                </label>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgb(116, 112, 113)",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  By creating an account you agree that you've read and agree
                  with the{" "}
                  <Link
                    to="/termsOfService"
                    style={{
                      color: "#000",
                    }}
                  >
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacyPolicy"
                    style={{
                      color: "#000",
                    }}
                  >
                    privacy policy
                  </Link>
                </p>
              </label>
            </div>

            <div className="button-wrapper width_100_button">
              <Button variant="contained" color="primary" id="create-account-button" className="disable">
                CREATE YOUR ACCOUNT
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

export default OrganizationLogo;
