import { useState } from "react";
import Item from "./components/Item";
import AgregarItem from "./components/AgregarItem";

function App() {
  const [lista, setLista] = useState([]);

  const agregarALista = (nuevoItem) => {
    setLista([nuevoItem, ...lista]);
  };

  const eliminarItem = (indexAEliminar) => {
    const nuevaLista = lista.filter((_, index) => index !== indexAEliminar);
    setLista(nuevaLista);
  };

  const editarItem = (indexAEditar, nuevoTexto, nuevaCantidad) => {
    const nuevaLista = [...lista];
    nuevaLista[indexAEditar].nombre = nuevoTexto;
    nuevaLista[indexAEditar].cantidad = nuevaCantidad;
    setLista(nuevaLista);
  };

  const toggleComprado = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].comprado = !nuevaLista[index].comprado;
    const ordenada = [...nuevaLista].sort((a, b) => a.comprado - b.comprado);
    setLista(ordenada);
  };

  return (
    <div>
      <h1>🛒 Mi Lista de Compras</h1>
      <AgregarItem onAgregar={agregarALista} />
      <ul>
        {lista.map((item, index) => (
          <Item
            key={index}
            index={index}
            item={item}
            onEliminar={eliminarItem}
            onEditar={editarItem}
            onToggleComprado={toggleComprado}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
