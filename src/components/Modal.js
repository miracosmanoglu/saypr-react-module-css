import React, { useEffect } from "react";
import styles from "../css/Modal.module.css";

export default function Modal({ triggerItem, show, children }) {
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  if (show) {
    return (
      <>
        {triggerItem}
        <div
          style={show ? { opacity: "1" } : { opacity: "0", display: "none" }}
          className={styles.editModalPageWrapper}
        >
          {children}
        </div>
      </>
    );
  }
  return <>{triggerItem}</>;
}
