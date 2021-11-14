import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LocalHeader.module.css";
export const LocalHeader = ({ list, active }) => {
  const HandleDropDown = (e, value) => {
    if (value == "dropdown") {
      e.preventDefault();
      document.querySelector(".local-header").classList.toggle("dropdown");
    }
  };
  return (
    <div className={`${styles.LocalHeader} local-header  `}>
      <ul className={`w-1000 ${styles.list_wrapper}`}>
        {list.map((Item) => (
          <li>
            <Link
              to={Item.redirection}
              onClick={(e) => HandleDropDown(e, Item.value)}
              className={`${styles.item_link} ${
                active === Item.value && styles.active
              }
              
              
              `}
            >
              {Item.value === "dropdown" ? active : Item.value}
              {Item.value === "dropdown" && <i class="fas fa-chevron-down"></i>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
