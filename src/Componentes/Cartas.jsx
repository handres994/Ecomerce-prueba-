function Cartas({ img, nombre, descripcion, precio, categoria }) {
  return (
    <div className="col-12 col-md-6 col-xl-4 pb-4">
      <div className="card rounded-0">
        <img
          className="d-block"
          src={img}
          alt={nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <span class="badge rounded-pill text-bg-dark">{categoria}</span>
          <p className="card-text">{descripcion}</p>
          <p>{precio}</p>
          <a href="#" className="btn btn-outline-dark bi bi-cart3">Agregar Carrito</a>
        </div>
      </div>
    </div>
  )

}

export default Cartas
