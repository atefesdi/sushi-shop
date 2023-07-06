import React from "react"
import styles from "./button.module.css"

const Button = (props) => {
  return (
    <div
      className={styles.container}
      style={{
        borderColor: props.color === "black" ? "#020202" : "transparent",
        background: props.color === "black" ? "#020202" : "transparent",
        color: props.color === "black" ? "#fff" : "#020202",
      }}
    >
      {props.children}
    </div>
  )
}

export default Button
