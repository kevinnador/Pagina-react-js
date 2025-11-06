import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const Productos = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    fetch("https://690bf8e96ad3beba00f6bbf1.mockapi.io/Productos")
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al cargar la data");
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

return (
<div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
    Productos
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {producto.map((producto) => (
      <div
        key={producto.id}
        className="border border-gray-200 rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="bg-gray-50 flex justify-center items-center h-56">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="max-h-52 object-contain p-4"
          />
        </div>

        <div className="p-5 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {producto.nombre}
          </h3>

          <p className="text-lg font-semibold text-emerald-700 mb-4">
            ${producto.precio}
          </p>

          <div className="flex items-center gap-2 mt-auto">
            <Link
              to={`/productos/${producto.id}`}
              className=""
            >
              Detalle
            </Link>

            <button
              onClick={() => agregarAlCarrito(producto)}
              className=" flex overflow-hidden rounded border ms-auto px-4 py-2 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
);

};

export default Productos;
