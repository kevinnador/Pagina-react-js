
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './Paginas/Inicio'
import DetalleProducto from './Paginas/DetalleProducto'
import { Routes, Route} from 'react-router-dom'
import RutaProtegida from './components/Protected/RutaProtegida'
import Login from './components/Protected/Login'
import Carrito from './components/Carrito'
import Admin from './components/admin'
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<Inicio /> } />
        <Route path='/Admin' element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>} />
        <Route path='/carrito' element={
          <RutaProtegida>
            <Carrito />
          </RutaProtegida>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
