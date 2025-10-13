import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-6 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">Mi Tienda React</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/inicio"
              className="hover:text-gray-300 transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="hover:text-gray-300 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

