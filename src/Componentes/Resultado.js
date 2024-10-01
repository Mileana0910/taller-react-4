import React from "react";
import styles from "../Styles/Resultado.module.css";

function Resultado({ numero }) {
  return (
    <div className={styles.resultado}>
      <h2>El número ingresado es: {numero}</h2>
    </div>
  );
}

export default Resultado;
