import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import BarraBusqueda from "./BarraBusqueda";

const Header = () => {
  const { usuario, logout } = useAuthContext();
  const { carrito } = useContext(CarritoContext);

  const esAdmin = usuario === "kevin";
  const estaLogueado = !!usuario;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c1a18] text-white shadow-lg">
      
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO → LINK TO INICIO */}
        <Link
          to="/inicio"
          className="text-2xl font-bold tracking-wide text-[#f5e9d5] hover:text-yellow-500 transition"
        >
          CoffeeCraft
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link
            to="/inicio"
            className="text-[#f5e9d5] hover:text-[#c8b79c] transition"
          >
            Inicio
          </Link>
          
          <Link
            to="/carrito"
            className="text-[#f5e9d5] hover:text-[#c8b79c] transition relative"
          >
            Carrito
            
          </Link>

          {esAdmin && (
            <Link
              to="/admin"
              className="text-[#f5e9d5] hover:text-[#c8b79c] transition"
            >
              Admin
            </Link>
          )}
        </div>

        {/* ICONOS + LOGIN */}
        <div className="flex items-center gap-4">

          {/* CARRITO ICONO CON CONTADOR */}
          <BarraBusqueda />
          <Link
            to="/carrito"
            className="p-2 border border-[#3b3733] rounded-lg hover:bg-[#2a2724] transition relative"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 2h2l3 12a2 2 0 0 0 2 1h10a2 2 0 0 0 2-1l2-8H5" />
            </svg>

            {carrito.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
                {carrito.length}
              </span>
            )}
          </Link>

          {/* LOGIN / LOGOUT */}
          {estaLogueado ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

