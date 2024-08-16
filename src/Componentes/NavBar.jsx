import React, { useState, useEffect } from 'react';
import Data from '../DataBase/dataBase.json';

function NavBar({ onFilter }) {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [category, setCategory] = useState('');
    const [inStock, setInStock] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        // Llamar a la función de filtrado que se pasa como prop
        let filteredProducts = Data;

        // Filtrar por rango de precio
        filteredProducts = filteredProducts.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        // Filtrar por categoría
        if (category !== '') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        // Filtrar por disponibilidad en stock
        if (inStock) {
            filteredProducts = filteredProducts.filter(product => product.inStock === true);
        }

        // Ordenar productos
        if (sortOrder === 'asc') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        } else {
            filteredProducts = filteredProducts.sort((a, b) => a.id - b.id);
        }

        onFilter(filteredProducts);
    }, [priceRange, category, inStock, sortOrder, onFilter]);

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
                setPriceRange([0, 100]);
        }
    };

    return (
        <nav className="navbar navbar-expand-md bg-black navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h1 className="m-0">
                        <img className="d-block img-fluid w-25" src="/logo/nombre_logo.png" alt="Logo de la tienda Total Style" />
                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="form-check form-switch form-check-reverse text-white">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Stock</label>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rango de Precio
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '' } })}>Todos</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '0-19' } })}>0 - 19</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '20-39' } })}>20 - 39</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '40-49' } })}>40 - 49</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '50-69' } })}>50 - 69</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '70-89' } })}>70 - 89</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handlePriceRangeChange({ target: { value: '90-100' } })}>90 - 100</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categoría
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('')}>Todas</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Camisetas')}>Camisetas</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Pantalones')}>Pantalones</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Gafas')}>Gafas</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Abrigos')}>Abrigos</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Calzados')}>Calzados</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCategory('Carteras')}>Carteras</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordenar por Precio
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('id')}>Todos</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('asc')}>Menor a Mayor</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('desc')}>Mayor a Menor</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" type="submit">Carrito</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
