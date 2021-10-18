import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocalHeader.module.css";
export const LocalHeader = ({ list, active }) => {
  return (
    <div className={styles.LocalHeader}>
      <ul className={`w-1000 ${styles.list_wrapper}`}>
        {list.map((Item) => (
          <li>
            <Link
              to={Item.redirection}
              className={`${styles.item_link} ${
                active === Item.value && styles.active
              }`}
            >
              {Item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
