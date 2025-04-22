import { useState } from "react";

function Item({ item, onEliminar, onEditar, index, onToggleComprado }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(item.nombre);
  const [nuevaCantidad, setNuevaCantidad] = useState(item.cantidad);

  const guardarEdicion = () => {
    const textoLimpio = nuevoNombre.trim();
    const cantidadLimpia = parseInt(nuevaCantidad);

    if (textoLimpio === "" || cantidadLimpia <= 0) return;

    onEditar(index, textoLimpio, cantidadLimpia);
    setModoEdicion(false);
  };

  return (
    <li style={{ opacity: item.comprado ? 0.6 : 1 }}>
      {modoEdicion ? (
        <>
          <input
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <input
            type="number"
            min="1"
            value={nuevaCantidad}
            onChange={(e) => setNuevaCantidad(e.target.value)}
            style={{ width: "60px" }}
          />
          <button onClick={guardarEdicion}>Guardar</button>
          <button onClick={() => setModoEdicion(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: item.comprado ? "line-through" : "none",
              flex: 1,
            }}
          >
            {item.nombre} ({item.cantidad})
          </span>

          <button onClick={() => onToggleComprado(index)}>
            {item.comprado ? "✔️" : "⬜"}
          </button>

          <button onClick={() => onEliminar(index)}>🗑️</button>
          <button onClick={() => setModoEdicion(true)}>✏️</button>
        </>
      )}
    </li>
  );
}

export default Item;
