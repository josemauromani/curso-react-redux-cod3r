import reactDom from "react-dom";
import ComponenteComParametro from "./components/basics/ComponenteComParametro";

reactDom.render(
  <>
    <ComponenteComParametro titulo="Avaliacao" aluno="Mauro" nota={9.3} />
    <ComponenteComParametro titulo="Avaliacao" aluno="Erika" nota={7.2} />
    <ComponenteComParametro titulo="Avaliacao" aluno="Isabel" nota={10.0} />
  </>,
  document.getElementById("root")
);
