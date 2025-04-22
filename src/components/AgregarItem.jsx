import { useState } from "react";

function AgregarItem({ onAgregar }) {
  const [texto, setTexto] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const manejarSubmit = (e) => {
    e.preventDefault();
    const textoLimpio = texto.trim();

    if (textoLimpio === "" || cantidad <= 0) return;

    onAgregar({
      nombre: textoLimpio,
      cantidad: parseInt(cantidad),
      comprado: false,
    });

    setTexto("");
    setCantidad(1);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Producto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="99"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        style={{ width: "60px" }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarItem;
