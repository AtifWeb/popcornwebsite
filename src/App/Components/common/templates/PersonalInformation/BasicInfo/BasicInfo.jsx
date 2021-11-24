import React, { useEffect, useState } from "react";
import styles from "./BasicInfo.module.css";
import { FloatingInput } from "../../../Atom/FloatingInput/FloatingInput";
import { Button } from "../../../Atom/button/Button";
import { EventHandle, HandleAllCheck } from "./input_handle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import {
  countries,
  months,
  smallMonths,
} from "../../../../../../Assets/js/Utils";
import { HandleSecondStepText } from "../../../../../../Assets/js/ValidationSignUp";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const BasicInfo = () => {
  const classes = useStyles();
  const [countryState, setcountry] = useState([]);
  const [monthsState, setmonths] = useState([]);
  useEffect(() => {
    setmonths(months);
    setcountry(countries);
    EventHandle();

    window.sessionStorage.removeItem("gender");
    window.sessionStorage.removeItem("month");
    window.sessionStorage.removeItem("country");

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
  }, []);
  const HandleSelectOnBlur = (e) => {
    let Label = e.target.parentNode.previousElementSibling;
    let BorderElement = e.target.parentNode;

    Label.style.color = "#000";
    BorderElement.style.border = "1px solid #000 ";
  };
  const HandleSelectOnFocus = (e) => {
    let Label = e.target.parentNode.previousElementSibling;

    Label.setAttribute("id", "active");
  };
  return (
    <div className={`${styles.BasicInfo} basic_info`} id="basic_info">
      <h2 className={styles.heading_2}>Basic Info</h2>

      <div className={styles.inputWrappers}>
        <div className={`${styles.grid_two} first_input`}>
          <FloatingInput
            type="text"
            label="First Name*"
            onChange={HandleAllCheck}
          />
          <small className={styles.helperMessage}>Invalid First name</small>
        </div>
        <div
          className={`${styles.grid_two} second_input`}
          onChange={HandleAllCheck}
        >
          <FloatingInput
            type="text"
            label="Last Name*"
            onChange={HandleAllCheck}
          />
          <small className={styles.helperMessage}>Invalid Last name</small>
        </div>
        <div className={styles.grid_three}>
          <div
            className="country-select gender_select select-box"
            style={{ marginTop: -15 }}
          >
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-simple"
                style={{ pointerEvents: "none" }}
              >
                Gender
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  let BorderElement = e.target.parentNode;
                  BorderElement.style.border = "1px solid #000 ";
                  window.sessionStorage.setItem("gender", true);
                  HandleAllCheck();
                }}
                id="country-select"
                onBlur={HandleSelectOnBlur}
                onFocus={HandleSelectOnFocus}
              >
                <option selected value="" style={{ display: "none" }}></option>

                <option value="m">Male</option>
                <option value="f">Female</option>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={`${styles.grid_three} third_input`}>
          <FloatingInput
            type="text"
            label="Address line 1*"
            onChange={HandleAllCheck}
          />{" "}
          <small className={styles.helperMessage}>Invalid Address line 1</small>
        </div>
        <div className={`${styles.grid_three} fourth_input`}>
          <FloatingInput
            type="text"
            label="Address line 2*"
            onChange={HandleAllCheck}
          />{" "}
          <small className={styles.helperMessage}>Invalid Address line 2</small>
        </div>
        <div className={`${styles.grid_two} fifth_input`}>
          <FloatingInput
            type="text"
            label="Postcode*"
            onChange={HandleAllCheck}
          />{" "}
          <small className={styles.helperMessage}>Invalid Postcode</small>
        </div>
        <div className={`${styles.grid_two} sixth_input`}>
          <FloatingInput
            type="text"
            label="Town/City*"
            onChange={HandleAllCheck}
          />{" "}
          <small className={styles.helperMessage}>Invalid Town/City</small>
        </div>
        <div className={styles.grid_three}>
          <div className="country-select select-box" style={{ marginTop: -15 }}>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-simple"
                style={{ pointerEvents: "none" }}
              >
                Country/Region
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  let BorderElement = e.target.parentNode;
                  BorderElement.style.border = "1px solid #000 ";
                  window.sessionStorage.setItem("country", true);
                  HandleAllCheck();
                }}
                id="country-select"
                onBlur={HandleSelectOnBlur}
                onFocus={HandleSelectOnFocus}
              >
                <option selected value="" style={{ display: "none" }}></option>
                {countryState.map((Eachcountry) => (
                  <option value={Eachcountry.code}>{Eachcountry.name}</option>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={`${styles.grid_one} seven_input`}>
          <FloatingInput type="text" label="Day*" onChange={HandleAllCheck} />{" "}
          <small className={styles.helperMessage}>Invalid Day</small>
        </div>
        <div className={styles.grid_one}>
          <div className="country-select select-box" style={{ marginTop: -15 }}>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-simple"
                style={{ pointerEvents: "none" }}
              >
                Month *
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  let BorderElement = e.target.parentNode;
                  BorderElement.style.border = "1px solid #000 ";
                  window.sessionStorage.setItem("month", true);
                  HandleAllCheck();
                }}
                id="country-select"
                onBlur={HandleSelectOnBlur}
                onFocus={HandleSelectOnFocus}
              >
                <option selected value="" style={{ display: "none" }}></option>
                {monthsState.map((month) => (
                  <option value={month}>{month}</option>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={`${styles.grid_one} eight_input`}>
          <FloatingInput type="text" label="Year*" onChange={HandleAllCheck} />{" "}
          <small className={styles.helperMessage}>Invalid Year</small>
        </div>{" "}
        <div className={`${styles.grid_three} nine_input`}>
          <FloatingInput
            type="text"
            label="Phone Number"
            onChange={HandleAllCheck}
          />{" "}
          <small className={styles.helperMessage}>Invalid Phone Number</small>
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
          classes="skill_save_one"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
