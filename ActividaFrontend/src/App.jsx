import React from 'react';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'

import Usuarios from './pages/Usuarios'
import Productos from './pages/Producto';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | {' '}
        <Link to="/Usuarios">Usuarios</Link> | {' '}
        <Link to= "/Productos">Productos</Link>
      </nav>


      {/*Routers*/}
      <Routes>
        <Route path='/Usuarios' element={<Usuarios/>}></Route>
        <Route path='/Productos' element={<Productos/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
