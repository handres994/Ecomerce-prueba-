import React, { useState, useEffect } from 'react';
import Data from '../DataBase/dataBase.json';
import Cartas from './Cartas';
import NavBar from './NavBar';

function Prueva() {
  const [filteredData, setFilteredData] = useState(Data);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

  // Función para establecer el rango de precios basado en la selección del usuario
  const handlePriceRangeChange = (e) => {
    const selectedRange = e.target.value;

    switch (selectedRange) {
      case '0-19':
        setPriceRange([0, 19]);
        break;
      case '20-39':
        setPriceRange([20, 39]);
        break;
      case '40-49':
        setPriceRange([40, 49]);
        break;
      case '50-69':
        setPriceRange([50, 69]);
        break;
      case '70-89':
        setPriceRange([70, 89]);
        break;
      case '90-100':
        setPriceRange([90, 100]);
        break;
      default:
        setPriceRange([0, 100]); // Para el caso de 'Todas' o cualquier otra opción no reconocida
    }
  };

  useEffect(() => {
    let products = Data;

    // Filtrar por rango de precio
    products = products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    // Filtrar por categoría
    if (category !== '') {
      products = products.filter(product => product.category === category);
    }

    // Filtrar por disponibilidad en stock
    if (inStock) {
      products = products.filter(product => product.inStock === true);
    }

    // Ordenar productos
    if (sortOrder === 'asc') {
      products = products.sort((a, b) => a.price - b.price);
    } else {
      products = products.sort((a, b) => b.price - a.price);
    }

    setFilteredData(products);
  }, [priceRange, category, inStock, sortOrder]);

  return (
    <>
      <NavBar />

      <div className="filters">
        <label>
          Rango de Precio:
          <select value={priceRange.join('-')} onChange={handlePriceRangeChange}>
            <option value="0-100">Todos</option>
            <option value="0-19">0 - 19</option>
            <option value="20-39">20 - 39</option>
            <option value="40-49">40 - 49</option>
            <option value="50-69">50 - 69</option>
            <option value="70-89">70 - 89</option>
            <option value="90-100">90 - 100</option>
          </select>
        </label>

        <label>
          Categoría:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Todas</option>
            <option value="Camisetas">Camisetas</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Gafas">Gafas</option>
            <option value="Abrigos">Abrigos</option>
            <option value="Calzados">Calzados</option>
            <option value="Carteras">Carteras</option>
          </select>
        </label>

        <label>
          En Stock:
          <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
        </label>

        <label>
          Ordenar por Precio:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Todas</option>
            <option value="asc">Menor a Mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </label>
      </div>

      <div className='container row mx-auto'>
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

export default Prueva;
