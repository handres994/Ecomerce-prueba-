# Tienda de Ropa - Proyecto de React

## Descripción del Proyecto
Este proyecto es una tienda de ropa en React que permite a los usuarios filtrar y ordenar productos. Utiliza datos de productos en formato JSON y presenta una interfaz intuitiva para navegar por los productos.

## Decciones Tecnicas

- `public/`
  - `images` - Imágenes de productos.
  - `logo` - Logo de Ecomerce.
- `src/`
  - `components/`
    - `Cartas.jsx` - Componente que toma información de JSON y la muestra en una tarjeta.
      - **Imagen del Producto**: Muestra la imagen del producto.
      - **Nombre del Producto**: Muestra el nombre del producto.
      - **Descripción del Producto**: Muestra una breve descripción del producto.
      - **Precio del Producto**: Muestra el precio del producto.
      - **Categoría del Producto**: Muestra la categoría del producto.
    - `NavBar.jsx` - Componente que proporciona una barra de navegación con las siguientes funcionalidades:
      - **Stock**: Activa o desactiva el filtro para mostrar solo productos en stock.
      - **Rango de Precio**: Permite seleccionar un rango de precios para filtrar productos.
      - **Categoría**: Permite seleccionar una categoría específica para filtrar productos.
      - **Ordenar por Precio**: Permite ordenar los productos por precio (menor a mayor, mayor a menor, o por ID).
    - `FiltroProductoNav.jsx` - Componente que gestiona los filtros y el ordenamiento de los productos.
  - `DataBase/`
    - `dataBase.json` - Archivo JSON con los datos de productos.
  - `App.js` - Componente principal de la aplicación.
  - `index.js` - Punto de entrada de la aplicación.

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/handres994/Ecomerce-prueba-.git
   npm install
   npm run dev


   





   
