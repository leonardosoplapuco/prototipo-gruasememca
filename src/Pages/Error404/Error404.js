import { Link } from "react-router-dom";

function Error404(){
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}

export default Error404;
