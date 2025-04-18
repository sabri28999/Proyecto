import { useState } from "react";

function AgregarItem({ onAgregar }) {
  const [texto, setTexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    onAgregar(texto);
    setTexto(""); // limpiamos el input
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Agregar producto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarItem;