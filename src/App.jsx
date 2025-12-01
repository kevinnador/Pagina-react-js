import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './Paginas/Inicio'
import DetalleProducto from './Paginas/DetalleProducto'
import { Routes, Route } from 'react-router-dom'
import RutaProtegida from './components/Protected/RutaProtegida'
import Login from './components/Protected/Login'
import Carrito from './components/Carrito'
import Admin from './components/admin'
import BuscarPage from "./Paginas/BuscarPage";
import ProductosCategoria from './components/ProductosCategoria'

function App() {

  return (
    <div>
      <Header />

      <Routes>

        {/* Buscador */}
        <Route path="/buscar" element={<BuscarPage />} />

        {/* Inicio */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Admin protegido */}
        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />

        {/* Carrito protegido */}
        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />

        {/* Categorías */}
        <Route
          path="/productos/granos"
          element={
            <ProductosCategoria categoria="granos" titulo="Granos" />
          }
        />

        <Route
          path="/productos/capsulas"
          element={
            <ProductosCategoria categoria="capsulas" titulo="Cápsulas" />
          }
        />

        <Route
          path="/productos/accesorios"
          element={
            <ProductosCategoria categoria="accesorios" titulo="Accesorios" />
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* DETALLE DE PRODUCTO (RUTA CORRECTA) */}
        <Route path="/producto/:id" element={<DetalleProducto />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App;
