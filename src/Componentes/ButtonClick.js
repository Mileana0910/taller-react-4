import React from "react";
import styles from "../Styles/ButtonClick.module.css";

function ButtonClick() {
  const manejarClick = () => {
    alert("Botón Clickeado");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Ejercicio 1 ButtonClick</h1>
      <button className={styles.button} onClick={manejarClick}>
        Haz click
      </button>
    </div>
  );
}
export default ButtonClick;
