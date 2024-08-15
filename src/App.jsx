import './App.css';
import Data from './DataBase/dataBase.json';
import Cartas from '../src/Componentes/Cartas';
//import NavBar from './Componentes/NavBar';
import Prueva from './Componentes/Prueva';
import Footer from './Componentes/Footer'


function App() {
  return (
    <>
    {/*<NavBar />  {NavBar}*/}
    <Prueva/> {Prueva}
    {/*<div className='container row mx-auto'>
    {Data.map((producto)=><Cartas key={producto.id} img={producto.imageURL} nombre={producto.name} descripcion={producto.description} precio={producto.price} categoria={producto.category}/>)}
    </div>*/}
    <Footer />  {Footer}
    </>
  );
}

export default App;

 