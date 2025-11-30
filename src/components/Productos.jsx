import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductoContext";
import { useContext } from "react";

const Productos = () => {
  
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

return (
<div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-neutral-100 mb-6 border-b pb-2">
    Nuestros Cafés
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {productos.map((producto) => (
      <div key={producto.id} className="group flex flex-col bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800">
        
        {/* Imagen */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Nombre + Precio */}
          <div className="pt-4">
            <h3 className="font-medium text-lg text-white">
              {producto.nombre}
            </h3>

            <p className="mt-2 font-semibold text-yellow-400">
              ${producto.precio}
            </p>
          </div>
        </div>

        {/* DETALLES (Descripción corta simulada) */}
        <div className="mb-4 mt-4 text-sm text-neutral-300">

          <div className="py-3 border-t border-neutral-700">
            <span className="font-medium text-white">Descripción:</span>
            <p className="mt-1 text-neutral-300 line-clamp-2">
              {producto.descripcion}
            </p>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-auto flex gap-3">

          <Link
            to={`/productos/${producto.id}`}
            className="px-4 py-2 rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white text-sm transition w-full text-center"
          >
            Detalle
          </Link>

          <button
            onClick={() => agregarAlCarrito(producto)}
            className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm w-full transition"
          >
            Agregar
          </button>

        </div>

      </div>
    ))}
  </div>
</div>
);

};

export default Productos;