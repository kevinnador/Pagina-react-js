import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Contacto from './components/Paginas/Contacto'
import Inicio from './components/Paginas/Inicio'
import DetalleProducto from './components/Paginas/DetalleProducto'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Routes>
        <Route path="/Inicio" element={<Inicio /> } />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
