import React from "react";
import NumeroAleatorio from "./components/basics/NumeroAleatorio";

export default () => (
  <>
    <h1>Desafio do Numero Aleatorio</h1>
    <NumeroAleatorio numeroMinimo={2} numeroMaximo={4} />
    <NumeroAleatorio numeroMinimo={4} numeroMaximo={13} />
    <NumeroAleatorio numeroMinimo={7} numeroMaximo={9} />
  </>
);
