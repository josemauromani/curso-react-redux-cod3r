import React from "react";

export default function NumeroAleatorio(props) {
  const numeroAleatorio = Math.ceil(
    Math.random() * (props.numeroMaximo - props.numeroMinimo) +
      props.numeroMinimo
  );
  return (
    <>
      <p>Valor Minimo - {props.numeroMinimo}</p>
      <p>Valor Maximo - {props.numeroMaximo}</p>

      <p><b>Numero aleatorio - {numeroAleatorio}</b></p>
      <hr />
    </>
  );
}
