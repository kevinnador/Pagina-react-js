import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductoContext";
import { useContext } from "react";

const formatPrice = (precio) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(precio);

const Productos = ({ lista }) => {
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const productosAMostrar = lista ?? productos;

  if (cargando) return "Cargando productos...";
  if (error) return error;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-neutral-100 mb-10">
        Nuestros Productos
      </h2>

      {/* GRID DE PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productosAMostrar.map((producto) => (
          <div
            key={producto.id}
            className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden 
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            {/* IMAGEN */}
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* TIPO */}
              <span className="absolute top-3 left-3 bg-neutral-800/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                {producto.tipo}
              </span>
            </div>

            {/* CONTENIDO */}
            <div className="p-5 flex flex-col gap-3">

              {/* NOMBRE */}
              <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-yellow-400 transition">
                {producto.nombre}
              </h3>

              {/* PRECIO */}
              <p className="text-[20px] font-bold text-yellow-400">
                {formatPrice(producto.precio)}
              </p>

              {/* DESCRIPCION */}
              <p className="text-neutral-400 text-sm line-clamp-2">
                {producto.descripcion}
              </p>

              {/* BOTONES */}
              <div className="flex gap-3 mt-4">

                <Link
                  to={`/productos/${producto.id}`}
                  className="flex-1 py-2 rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white text-center transition"
                >
                  Ver detalle
                </Link>

                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="flex-1 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition"
                >
                  Añadir
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
