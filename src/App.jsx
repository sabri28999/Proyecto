import { useState } from "react";
import Item from "./components/Item";
import AgregarItem from "./components/AgregarItem";

function App() {
  const [lista, setLista] = useState([]);

  const agregarALista = (nuevoItem) => {
    setLista([...lista, nuevoItem]);
  };

  const eliminarItem = (indexAEliminar) => {
    const nuevaLista = lista.filter((_, index) => index !== indexAEliminar);
    setLista(nuevaLista);
  };

  const editarItem = (indexAEditar, nuevoTexto) => {
    const nuevaLista = [...lista];
    nuevaLista[indexAEditar] = nuevoTexto;
    setLista(nuevaLista);
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
            nombre={item}
            onEliminar={eliminarItem}
            onEditar={editarItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
