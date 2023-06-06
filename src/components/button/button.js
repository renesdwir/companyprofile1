import React from "react";
import styles from "./button.module.css";

export const Button = ({ children, buttonType, hide, ...otherProps }) => {
  let buttonClassName = "";

  if (buttonType === "green") {
    buttonClassName = styles.green;
  } else if (buttonType === "grey") {
    buttonClassName = styles.grey;
  } else if (buttonType === "none") {
    buttonClassName = styles.none;
  }
  let hideMobile = hide ? styles.hideMobile : "";
  return (
    <button
      className={`${styles["button"]} ${buttonClassName} ${hideMobile}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
