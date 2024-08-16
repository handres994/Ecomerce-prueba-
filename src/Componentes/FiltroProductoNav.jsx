import React, { useState } from "react";
import Cartas from "./Cartas";
import NavBar from "./NavBar";

function FiltroProductoNav() {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <NavBar onFilter={setFilteredData} />

      <div className="container row mx-auto mt-4">
        {filteredData.map((producto) => (
          <Cartas
            key={producto.id}
            img={producto.imageURL}
            nombre={producto.name}
            descripcion={producto.description}
            precio={producto.price}
            categoria={producto.category}
          />
        ))}
      </div>
    </>
  );
}

export default FiltroProductoNav;
