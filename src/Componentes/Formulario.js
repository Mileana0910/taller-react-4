import React from "react";
import styles from "../Styles/Formulario.module.css";

function Formulario({ onNumeroCambio }) {
  const manejarCambio = (evento) => {
    onNumeroCambio(evento.target.value);
  };

  return (
    <div className={styles.formulario}>
      <label className={styles.label}>
        Ingresa un número:
        <input
          className={styles.input}
          type="number"
          onChange={manejarCambio}
        />
      </label>
    </div>
  );
}

export default Formulario;
