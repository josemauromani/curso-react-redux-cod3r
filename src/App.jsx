import React from "react";
import ComponenteComParametro from "./components/basics/ComponenteComParametro";
import Primeiro from "./components/basics/Primeiro";

export default () => (
  <>
    <h1>Fundamentos do React</h1>
    <Primeiro />
    <ComponenteComParametro titulo="Avaliacao" aluno="Mauro" nota={9.3} />
    <ComponenteComParametro titulo="Avaliacao" aluno="Erika" nota={7.2} />
    <ComponenteComParametro titulo="Avaliacao" aluno="Isabel" nota={10.0} />
  </>
);
