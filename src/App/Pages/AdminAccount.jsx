import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.svg";
import "../../Assets/styles/css/Signin.css";
import { countries, months, smallMonths } from "../../Assets/js/Utils";
import {
  HandleEmailValidation,
  HandlePasswordValidation,
  HandleTextValidation,
  HandleConfirmPasswordValidation,
  HandleSecondStepText,
} from "../../Assets/js/ValidationSignUp";
import {
  HandleSecondStepOnBlur,
  HandleSecondStepOnFocuse,
} from "../../Assets/js/AddressWorking";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../Assets/styles/css/Signup.css";

import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { LaptopWindowsTwoTone } from "@material-ui/icons";
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

function AdminAccount() {
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

    document.querySelector("#fname").addEventListener("change", (e) => {
      setFirstName(e.target.value);
    });
    document.querySelector("#lname").addEventListener("change", (e) => {
      setLastName(e.target.value);
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
  const HandleNext = (e) => {
    e.preventDefault();
    document.querySelector(".input-collection").style.display = "none";
    document.querySelector(".step-2").style.display = "block";
    document.querySelector(".create-account-message").style.display = "none";
    document.querySelector(".welcom-message").style.display = "block";
  };
  const ShowPasswords = (e) => {
    let PasswordsElements = document.querySelectorAll(".password");

    let type = "";
    PasswordsElements.forEach((EachElement) => {
      let Input = EachElement.querySelector("input");
      type = Input.getAttribute("type") == "text" ? "password" : "text";
      Input.setAttribute("type", type);
    });
  };
  const RemoveMessages = (e) => {
    let ElementId = e.target.id;
    let BorderElement = e.target.nextElementSibling;
    let Label = e.target.parentNode.previousElementSibling;
    let HelperElement = "";

    HelperElement = e.target.parentNode.parentNode.nextElementSibling;

    let NotCorrect = document.querySelector(".not-correct");

    BorderElement.style.border = "1px solid rgba(0, 0, 0, 0.23)";
    Label.style.color = "rgba(0, 0, 0, 0.23)";

    if (e.target.id == "password") {
      HelperElement.style.display = "none";
    }
    if (e.target.id != "Day") {
      HelperElement.textContent = "";
    }
    if (e.target.id == "Day") {
      HelperElement.style.display = "none";
    }
    if (
      ElementId == "address1" ||
      ElementId == "address2" ||
      ElementId == "postcode" ||
      ElementId == "town"
    ) {
      HelperElement.parentNode.style.marginBottom = "0px";
    }
    if (
      e.target.id == "passsword" ||
      e.target.id == "email" ||
      e.target.id == "fname" ||
      e.target.id == "lname" ||
      e.target.id == "fname" ||
      e.target.id == "address1" ||
      e.target.id == "address2" ||
      e.target.id == "postcode" ||
      e.target.id == "town"
    ) {
      HelperElement.style.marginBottom = "10px";
    }

    NotCorrect.style.display = "none";

    if (e.target.id == "year") {
      document.querySelector(".birthday").classList.remove("active");
    }
    if (e.target.id == "year") {
      document.querySelector(".birthday").classList.remove("active");
    }
    HelperElement.classList.remove("day-active");
  };

  const HandleSelectOnFocus = (e) => {
    let Label = e.target.parentNode.previousElementSibling;

    Label.setAttribute("id", "active");
    console.log(Label);
  };
  const HandleSelectOnBlur = (e) => {
    let Label = e.target.parentNode.previousElementSibling;
    let BorderElement = e.target.parentNode;

    Label.style.color = "#000";
    BorderElement.style.border = "1px solid #000 ";
  };
  const CheckIsValid = (e) => {
    let BorderElement = e.target.nextElementSibling;
    let Label = e.target.parentNode.previousElementSibling;
    let ParentElement = e.target.parentNode.parentNode;
    let email =
      /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,8})(\.[a-z]{1,8})?(\.[a-z]{1,8})?$/;
    let password = /^[\d\w\$#@&%!^*-]{8,26}$/i;
    let HelperElement = "";

    // if(e.target.id=='password'){
    //     HelperElement=e.target.parentNode.parentNode.nextElementSibling.nextElementSibling

    // }else{
    HelperElement = e.target.parentNode.parentNode.nextElementSibling;
    // }

    if (e.target.value == "") {
      BorderElement.style.border = "1px solid red";
      Label.style.color = "red";

      if (
        e.target.id == "passsword" ||
        e.target.id == "email" ||
        e.target.id == "fname" ||
        e.target.id == "lname" ||
        e.target.id == "fname"
      ) {
        HelperElement.style.marginBottom = "20px";
      }
      if (
        e.target.id == "address1" ||
        e.target.id == "address2" ||
        e.target.id == "postcode" ||
        e.target.id == "town"
      ) {
        HelperElement.style.marginBottom = "9px";
      }

      if (e.target.id != "password" || e.target.id != "email") {
        HelperElement.style.display = "inline-block";
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
      if (e.target.id == "Day") {
      } else {
        HelperElement = e.target.parentNode.parentNode.nextElementSibling;
        HelperElement.textContent = "";
      }
    }

    if (e.target.id == "email") {
      if (!email.test(e.target.value)) {
        BorderElement.style.border = "1px solid red";
        Label.style.color = "red";
        HelperElement.textContent = "Invalid Email";
        HelperElement.style.marginBottom = "20px";
      }
    } else if (e.target.value == "") {
      let ElementId = e.target.id;
      BorderElement.style.border = "1px solid red";
      Label.style.color = "red";
      if (ElementId == "fname") {
        HelperElement.textContent = "Invalid First name";
      } else if (ElementId == "lname") {
        HelperElement.textContent = "Invalid Last name";
      } else if (ElementId == "Password") {
        HelperElement.textContent = "Invalid Password";
      } else if (ElementId == "ConfirmPassword") {
        HelperElement.textContent = "Invalid Confirm Password";
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
      } else if (ElementId == "Day") {
        HelperElement.style.display = "block";
        HelperElement.classList.add("day-active");
        document.querySelector(".birthday").classList.remove("active");
      } else if (ElementId == "year") {
        HelperElement.textContent = "Invalid year";

        console.log(document.querySelector(".day-active"));
        if (document.querySelector(".day-active") == null) {
          document.querySelector(".birthday").classList.add("active");
        }
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
            Now Just Create an admin account
          </p>
          <p className="welcom-message" style={{ display: "none" }}>
            {FirstName}, welcome to Cyber Volunteers
          </p>
          <p className="helper">
            This will be used to login to and manage your Organisation
          </p>

          <div className="input-collection">
            <TextField
              onBlur={CheckIsValid}
              onFocus={RemoveMessages}
              onChange={HandleTextValidation}
              id="fname"
              label="First name"
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

            <TextField
              onBlur={CheckIsValid}
              onFocus={RemoveMessages}
              onChange={HandleTextValidation}
              id="lname"
              label="Last name"
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

            <TextField
              onBlur={CheckIsValid}
              onFocus={RemoveMessages}
              onChange={HandleEmailValidation}
              id="email"
              label="Email"
              autocomplete="on"
              variant="outlined"
              style={{ width: "100%" }}
            />
            <span
              className="helping-text email-helper"
              style={{
                marginBottom: "10px",
                display: "inline-block",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>

            <TextField
              onBlur={CheckIsValid}
              className="password"
              onChange={HandlePasswordValidation}
              id="password"
              label="Password"
              variant="outlined"
              style={{ width: "100%" }}
              type="password"
              onFocus={RemoveMessages}
            />

            <span
              className="helping-text password-helper"
              style={{
                marginBottom: "0px",
                display: "none",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>

            <div
              className="password-ui-strong"
              style={{ marginTop: 10, marginBottom: 18 }}
            >
              <div className="bars" style={{ marginBottom: 5 }}>
                <span className="bar" id="bar-1"></span>
                <span className="bar" id="bar-2"></span>
                <span className="bar" id="bar-3"></span>
                <span className="bar" id="bar-4"></span>
              </div>
              <p
                style={{ fontSize: 12, marginTop: 10 }}
                className="passwordStrength"
              >
                Password Strength: Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>

            <TextField
              onBlur={CheckIsValid}
              className="password"
              onChange={HandleConfirmPasswordValidation}
              id="ConfirmPassword"
              label="Confirm Password"
              variant="outlined"
              style={{ width: "100%", marginTop: ".6rem" }}
              type="password"
              onFocus={RemoveMessages}
            />

            <span
              className="helping-text password-helper"
              style={{
                marginBottom: "10px",
                display: "inline-block",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 12,
                color: "#F65B4E",
              }}
            ></span>

            <span
              className="helping-text not-correct"
              style={{
                marginBottom: "10px",
                display: "none",
                marginTop: 7,
                fontSize: 13,
                paddingLeft: 0,
                color: "#F65B4E",
              }}
            >
              Email or password is not recognised
            </span>

            <div
              className="checkbox-wrapper password-checkbox-wrapper"
              style={{ marginBottom: 27 }}
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
                onClick={ShowPasswords}
              >
                <label
                  htmlFor="show-password-checkbox"
                  className="custom-checkbox custom-checkbox-box show-password-label"
                >
                  <i class="fas fa-check"></i>
                </label>
                <p> Show password</p>
              </label>
            </div>

            <div className="button-wrapper width_100_button">
              <Button variant="contained" color="primary" className={`disable`}>
                VERIFY EMAIL
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

export default AdminAccount;
