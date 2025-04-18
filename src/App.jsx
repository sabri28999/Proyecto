import { useState } from "react";
import Item from "./components/Item";
import AgregarItem from "./components/AgregarItem";

function App() {
  const [lista, setLista] = useState([]);

  const agregarALista = (nuevoItem) => {
    setLista([...lista, nuevoItem]);
  };

  return (
    <div>
      <h1>🛒 Mi Lista de Compras</h1>
      <AgregarItem onAgregar={agregarALista} />
      <ul>
        {lista.map((item, index) => (
          <Item key={index} nombre={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;