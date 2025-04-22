import { useState } from "react";

function Item({ nombre, onEliminar, onEditar, index }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [textoEditado, setTextoEditado] = useState(nombre);

  const guardarEdicion = () => {
    const textoLimpio = textoEditado.trim();
    if (textoLimpio === "") return;
    onEditar(index, textoLimpio);
    setModoEdicion(false);
  };

  return (
    <li>
      {modoEdicion ? (
        <>
          <input
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
          />
          <button onClick={guardarEdicion}>Guardar</button>
          <button onClick={() => setModoEdicion(false)}>Cancelar</button>
        </>
      ) : (
        <>
          {nombre}
          <button onClick={() => onEliminar(index)}>🗑️</button>
          <button onClick={() => setModoEdicion(true)}>✏️</button>
        </>
      )}
    </li>
  );
}

export default Item;
