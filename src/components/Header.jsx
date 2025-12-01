import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import BarraBusqueda from "./BarraBusqueda";

const Header = () => {
  const { usuario, logout } = useAuthContext();
  const { carrito } = useContext(CarritoContext);

  const [openProductos, setOpenProductos] = useState(false);

  const esAdmin = usuario === "kevin";
  const estaLogueado = !!usuario;

  const toggleProductos = () => setOpenProductos((prev) => !prev);
  const cerrarProductos = () => setOpenProductos(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c1a18] text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO CENTRADO REAL */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/inicio"
            className="text-2xl font-bold tracking-wide text-[#f5e9d5] hover:text-yellow-500 transition"
          >
            CoffeeCraft
          </Link>
        </div>

        {/* LINKS CENTRALES */}
        <div className="hidden md:flex items-center gap-8 text-lg flex-1 justify-center">

          <Link
            to="/inicio"
            className="text-[#f5e9d5] hover:text-yellow-500 transition"
            onClick={cerrarProductos}
          >
            Inicio
          </Link>

          {/* DROPDOWN PRODUCTOS POR CLICK */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleProductos}
              className="flex items-center gap-1 text-[#f5e9d5] hover:text-yellow-500 transition font-medium"
            >
              Productos
              <span className="text-xs opacity-80">
                {openProductos ? "▲" : "▼"}
              </span>
            </button>

            {openProductos && (
              <div
                className="
                  absolute left-0 mt-3 w-48
                  bg-[#1f1c19]
                  border border-[#3b3733]
                  rounded-xl
                  shadow-xl
                  transition-all duration-200
                  overflow-hidden
                  backdrop-blur-md
                  z-[9999]
                "
              >
                <Link
                  to="/productos/granos"
                  className="block px-4 py-3 text-[#f5e9d5] hover:bg-[#3b3733] hover:text-yellow-500 transition"
                  onClick={cerrarProductos}
                >
                  Granos
                </Link>

                <Link
                  to="/productos/capsulas"
                  className="block px-4 py-3 text-[#f5e9d5] hover:bg-[#3b3733] hover:text-yellow-500 transition"
                  onClick={cerrarProductos}
                >
                  Cápsulas
                </Link>

                <Link
                  to="/productos/accesorios"
                  className="block px-4 py-3 text-[#f5e9d5] hover:bg-[#3b3733] hover:text-yellow-500 transition"
                  onClick={cerrarProductos}
                >
                  Accesorios
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/carrito"
            className="text-[#f5e9d5] hover:text-yellow-500 transition relative"
            onClick={cerrarProductos}
          >
            Carrito
          </Link>

          {esAdmin && (
            <Link
              to="/admin"
              className="text-[#f5e9d5] hover:text-yellow-500 transition"
              onClick={cerrarProductos}
            >
              Admin
            </Link>
          )}
        </div>

        {/* DERECHA: BUSCADOR + CARRITO + LOGIN */}
        <div className="flex items-center gap-4 flex-1 justify-end">

          <BarraBusqueda />

          <Link
            to="/carrito"
            className="p-2 border border-[#3b3733] rounded-lg hover:bg-[#2a2724] transition relative"
            onClick={cerrarProductos}
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

          {estaLogueado ? (
            <button
              onClick={() => {
                cerrarProductos();
                logout();
              }}
              className="px-4 py-2 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
              onClick={cerrarProductos}
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
