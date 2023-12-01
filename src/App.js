import './css/App.css';

import Formulario from './componentes/Formulario';
import Navegacion from './componentes/Navegacion';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Error from './componentes/Error';
import Usuarios from './componentes/Usuarios';
import Buscar from './componentes/Buscar';

function App() {
  return (
    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/formulario' element={ <Formulario /> } />
        <Route path='/usuarios' element={ <Usuarios /> } />
        <Route path='/buscar' element={ <Buscar /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
      
    </>
  );
}


export default App;
