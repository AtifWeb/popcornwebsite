import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {
  HandleSecondStepOnBlur,
  HandleSecondStepOnFocuse,
} from "../../Assets/js/AddressWorking";
import logo from "../../Assets/img/logo.svg";
import "../../Assets/styles/css/Signin.css";
import { countries, months, smallMonths } from "../../Assets/js/Utils";
import { HandleTextValidation } from "../../Assets/js/ValidationOrganizationInfo";
import {
  HandleSecondStepTextInfomation,
} from "../../Assets/js/ValidationSignUp";

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

function OrganizationInfomation() {
  const classes = useStyles();
  const [FirstName, setFirstName] = useState();
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
    
            document.querySelector(".country-select").style.margin=0
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
        HelperElement.textContent = "Invalid Address";
      } else if (ElementId == "lname") {
        HelperElement.textContent = "Invalid Country/Region";
      } else if (ElementId == "URL") {
        HelperElement.textContent = "Invalid Website URL";
      } else if (ElementId == "PHONE") {
        HelperElement.textContent = "Invalid Phone Number";
      } else if (ElementId == "address1") {
        HelperElement.textContent = "Invalid Adress 1";
        HelperElement.parentNode.style.marginBottom = "10px";
      } else if (ElementId == "address2") {
        HelperElement.textContent = "Invalid Adress 2";
        HelperElement.parentNode.style.marginBottom = "10px";
      } else if (ElementId == "postcode") {
        HelperElement.textContent = "Invalid postcode";
        HelperElement.parentNode.style.marginBottom = "10px";
      } else if (ElementId == "town") {
        HelperElement.textContent = "Invalid town";
        HelperElement.parentNode.style.marginBottom = "10px";
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
            Let’s get some basic info about your organisation
          </p>

          <div className="input-collection">

          <form
              autoComplete="off"
              style={{
                position: "relative",
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
                padding: 0,
              }}
              className="address-wrapper"
            >
              <TextField
                className="address"
                id="address"
                autocomplete="off"
                onFocus={HandleSecondStepOnFocuse}
                onBlur={HandleSecondStepOnBlur}
                onChange={HandleSecondStepTextInfomation}
                label="Enter you street address"
                variant="outlined"
                style={{ width: "100%", marginTop: 20 }}
                type="text"
              />
              <small
                style={{
                  display: "none",
                  marginTop: "7px",
                  fontSize: "13px",
                  color: "rgb(246, 91, 78)",
                }}
                className="address-error"
              >
                Invalid Address
              </small>
              <small
                style={{
                  fontSize: "12px",
                  color: " rgb(127, 122, 123)",
                  position: "absolute",
                  width: "100%",
                  left: "0%",
                }}
                className="available-message"
              >
                Cyber Volunteers is only available in the UK
              </small>
            </form>

            <div
              className="result-wrapper"
              style={{
                position: "relative",
                zIndex: 2222,
                backgroundColor: "#fff",
              }}
            >
              <p>e.g. “SW12 7EU” or “64 London Road”</p>
              <div className="typing-start-result" style={{ display: "none" }}>
                <div className="firstpart">
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>

                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                    <p>75 results</p>
                  </div>

                  <Link
                    to="#"
                    class="manual-address"
                    onClick={(e) => {
                      e.preventDefault();

                      document.querySelector(".address-wrapper").style.display =
                        "none";
                      document.querySelector(".result-wrapper").style.display =
                        "none";
                      document
                        .querySelector(".expand-address")
                        .classList.add("active");
                    }}
                    style={{
                      display: "block",
                      color: "#F85220",
                      fontSize: "15px",
                      textAlign: "center",
                      borderTop: "1px solid #ddd",
                      padding: "10px 0px",
                    }}
                  >
                    Enter address manually
                  </Link>
                </div>

                <div className="secondpart" style={{ display: "none" }}>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="left-presentation">
                      <h5>Atif Asim</h5>
                      <small>Pakistan</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="expand-address" style={{ marginTop: 20 }}>
              <div className="text-field-wrapper">
                <TextField
                  className="address"
                  id="address1"
                  onChange={HandleSecondStepTextInfomation}
                  
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  label="Address Line 1"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                />
                <span
                  className="helping-text password-helper"
                  style={{
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>
              </div>
              <div className="text-field-wrapper">
                <TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  className="address"
                  id="address2"
                  onChange={HandleSecondStepTextInfomation}

                  label="Address Line 2"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                />
                <span
                  className="helping-text password-helper"
                  style={{
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>
              </div>
              <div className="text-field-wrapper">
                <TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  className="address"
                  id="postcode"
                  onChange={HandleSecondStepTextInfomation}

                  label="Postcode"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                />
                <span
                  className="helping-text password-helper"
                  style={{
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>
              </div>
              <div className="text-field-wrapper">
                <TextField
                  onBlur={CheckIsValid}
                  onFocus={RemoveMessages}
                  className="address"
                  id="town"
                  onChange={HandleSecondStepTextInfomation}
                  label="Town/City"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                />
                <span
                  className="helping-text password-helper"
                  style={{
                    display: "inline-block",
                    marginTop: 7,
                    fontSize: 13,
                    paddingLeft: 12,
                    color: "#F65B4E",
                  }}
                ></span>
              </div>
            </div>
            <div className="country-select" style={{marginTop:35}}>
            <TextField
              onBlur={CheckIsValid}
              onFocus={RemoveMessages}
           
              onChange={HandleSecondStepTextInfomation}
              id="country-select"
              label="Country/Region"
              variant="outlined"
              autocomplete="on"
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
</div>
            <div
              className="checkbox-wrapper password-checkbox-wrapper"
              style={{ marginBottom: 20 }}
            >
              <input
                type="checkbox"
                name=""
                id="show-password-checkbox"
                style={{ display: "none" }}
              />
              <label
                htmlFor="show-password-checkbox"
                id="forget-password-wrapper"
              >
                <label
                  htmlFor="show-password-checkbox"
                  className="custom-checkbox custom-checkbox-box show-password-label"
                >
                  <i class="fas fa-check"></i>
                </label>
                <p> Don’t publicly display this address</p>
              </label>
            </div>

            <TextField
              onBlur={CheckIsValid}
              onFocus={RemoveMessages}
              onChange={HandleSecondStepTextInfomation}
              id="URL"
              label="Website URL"
              variant="outlined"
              autocomplete="on"
              style={{ width: "100%" }}
            />
            <span
              className="helping-text text-helper"
              style={{
                marginBottom: "20px",
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
              onChange={HandleSecondStepTextInfomation} 
              id="PHONE"
              label="Phone"
              variant="outlined"
              autocomplete="on"
              style={{ width: "100%" }}
            />
            <span
              className="helping-text text-helper"
              style={{
                marginBottom: "20px",
                display: "inline-block",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>

            <div className="button-wrapper width_100_button">
              <Button variant="contained" color="primary"  className={`disable create-account-label`}>
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

export default OrganizationInfomation;
