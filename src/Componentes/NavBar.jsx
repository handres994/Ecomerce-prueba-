function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-black navbar-dark">  
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h1 className="m-0">
                        <img className="d-block img-fluid w-25" src="/logo/nombre_logo.png" alt="Logo de la tienda Total Style" />
                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tiendas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promociones</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 rounded-2" type="search" placeholder="Ingresa el Producto"
                            aria-label="Buscar" />
                        <button className="btn btn-outline-light rounded-2" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
