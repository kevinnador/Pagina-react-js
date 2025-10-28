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
    fetch("https://fakestoreapi.com/products")
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
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Productos
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {producto.map((prod) => (
      <div
        key={prod.id}
        className="border border-gray-200 rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="bg-gray-50 flex justify-center items-center h-56">
          <img
            src={prod.image}
            alt={prod.title}
            className="max-h-52 object-contain p-4"
          />
        </div>

        <div className="p-5 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {prod.title}
          </h3>

          <p className="text-lg font-semibold text-emerald-700 mb-4">
            ${prod.price}
          </p>

          <div className="flex justify-between gap-2">
            <Link
              to={`/productos/${prod.id}`}
              className="w-1/2 text-center px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Detalle
            </Link>

            <button
              onClick={() => agregarAlCarrito(prod)}
              className="w-1/2 text-center px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition"
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
