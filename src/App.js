import React from "react";

//APP
import ButtonClick from "./Componentes/ButtonClick";

//APP1
// import FormularioUsuario from "./Componentes/FormularioUsuario";

//APP2
// import React, { useState } from "react";
// import Formulario from "./Componentes/Formulario";
// import Resultado from "./Componentes/Resultado";
// import styles from "./App.module.css";

function App() {
  return (
    <div>
      <ButtonClick />
    </div>
  );
}
export default App;

// function App1() {
//   return (
//     <div>
//       <FormularioUsuario />
//     </div>
//   );
// }
// export default App1;

// function App2() {
//   const [numero, setNumero] = useState("");

//   const manejarCambioNumero = (nuevoNumero) => {
//     setNumero(nuevoNumero);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.h1}>Ejercicio 3 Lifting State Up</h1>
//       <Formulario onNumeroCambio={manejarCambioNumero} />
//       <Resultado numero={numero} />
//     </div>
//   );
// }
// export default App2;
