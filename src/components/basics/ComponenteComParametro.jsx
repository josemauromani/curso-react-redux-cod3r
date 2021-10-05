export default function ComponenteComParametro(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h3>{props.aluno}</h3>
      <p>{props.nota}</p>
    </div>
  );
}
