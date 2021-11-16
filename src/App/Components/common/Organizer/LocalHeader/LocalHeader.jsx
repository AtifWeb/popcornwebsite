import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LocalHeader.module.css";
export const LocalHeader = ({ list, active }) => {
  const HandleDropDown = () => {
    document.querySelector(".local-header").classList.toggle("dropdown");
  };
  return (
    <div className={`${styles.LocalHeader} local-header  `}>
      <ul className={`w-1000 ${styles.list_wrapper}`}>
        {list.map((Item) => (
          <li>
            {Item.value === "dropdown" && (
              <div
                onClick={(e) => HandleDropDown()}
                className={`${styles.item_link} ${
                  active === Item.value && styles.active
                }`}
              >
                {active}
                <i class={`fas fa-chevron-down ${styles.arrow}`}></i>
              </div>
            )}
            {Item.value !== "dropdown" && (
              <Link
                to={Item.redirection}
                className={`${styles.item_link} ${
                  active === Item.value && styles.active
                }
              
              
              `}
              >
                {Item.value}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
