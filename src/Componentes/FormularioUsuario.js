import React, { useState } from "react";
import styles from "../Styles/FormularioUsuario.module.css";

function FormularioUsuario() {
  const [nombre, setNombre] = useState("");
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    alert(`Formulario enviado \nNombre: ${nombre}`);
  };
  return (
    <form className={styles.formulario} onSubmit={manejarEnvio}>
      <h1 className={styles.h1}>Ejercicio 2 Formulario</h1>
      <label className={styles.label}>
        Nombre:
        <input
          className={styles.input}
          type="text"
          value={nombre}
          onChange={manejarCambio}
        />
      </label>
      <button className={styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
}
export default FormularioUsuario;
