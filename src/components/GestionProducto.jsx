import { useState } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductoContext";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon";

const GestionProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();

  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null);
    setMostrarForm(true);
  };

  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto);
    setMostrarForm(true);
  };

  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

return (
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

    {/* Contenedor centrado ancho real */}
    <div className="mx-auto max-w-4xl">

      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Lista de Productos
        </h1>
      </header>

      {/* Botón agregar */}
      <button
        onClick={abrirFormularioAgregar}
        className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500 transition"
      >
        <CirclePlus className="size-4" />
        Agregar Producto
      </button>

      {/* Lista */}
      <div className="mt-8">
        <ul className="flex flex-col gap-4">

          {productos.map((producto) => (
            <li
              key={producto.id}
              className="flex items-center justify-between gap-4 p-3 rounded-lg border border-gray-200 shadow-sm"
            >
              {/* Sección izquierda */}
              <div className="flex items-center gap-4">

                {/* Imagen */}
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-16 h-16 rounded-md object-cover border"
                />

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {producto.nombre}
                  </h3>

                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    Precio: ARS ${producto.precio}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tipo: <span className="font-medium">{producto.tipo}</span>
                  </p>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => abrirFormularioEditar(producto)}
                  className="text-gray-600 hover:text-yellow-500"
                >
                  <SquarePen className="size-4" />
                </button>

                <button
                  onClick={() => eliminarProducto(producto.id)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <TrashIcon className="size-4" />
                </button>
              </div>
            </li>
          ))}

          {productos.length === 0 && (
            <p className="text-center text-gray-500">No hay productos</p>
          )}
        </ul>
      </div>

      {/* Modal */}
      {mostrarForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white w-full max-w-4xl p-6 rounded-2xl shadow-2xl">
            <FormProducto
              productoInicial={productoSeleccionado || {}}
              modo={modoFormulario}
              onCerrar={cerrarFormulario}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);
}
export default GestionProductos;