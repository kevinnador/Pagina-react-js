import { Link } from "react-router-dom";
import BarraBusqueda from "./BarraBusqueda";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const estaLogueado = !!usuario;

  return (
    <header className="bg-[#1c1a18] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">

        {/* TITULO A LA IZQUIERDA */}
        <div className="flex-1">
          <Link
            to="/inicio"
            className="text-3xl font-bold tracking-wide text-[#f5e9d5] hover:text-yellow-400 transition"
          >
            CoffeeCraft
          </Link>
        </div>

        {/* BUSCADOR CENTRADO + MÁS ANCHO */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-2xl"> 
            <BarraBusqueda />
          </div>
        </div>

        {/* ACCIONES A LA DERECHA */}
        <div className="flex items-center gap-4 flex-1 justify-end">

          {/* CARRITO */}
          <Link
            to="/carrito"
            className="relative p-2 rounded-lg hover:bg-white/10 transition"
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
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs px-2 py-[1px] rounded-full">
                {carrito.length}
              </span>
            )}
          </Link>

          {/* LOGIN / LOGOUT */}
          {estaLogueado ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
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
      </div>
    </header>
  );
};

export default Header;
