import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu';
import Usuarios from './usuarios/index';
import Publicaciones from './Publicaciones/index';
import Tareas from './Tareas';
import TareasGuaradar from './Tareas/Guardar';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margen'>
    <Route exact path='/' component={ Usuarios } />
    <Route exact path='/tareas' component={ Tareas } />
    <Route exact path='/publicaciones/:key' component={ Publicaciones } />
    <Route exact path='/tareas/guardar' component={ TareasGuaradar } />
    <Route exact path='/tareas/guardar/:usu_id/:tar_id' component={ TareasGuaradar } />
    </div>
  </BrowserRouter>
)

export default App;
