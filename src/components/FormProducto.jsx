import { useState } from "react";
import { useProductosContext } from "../context/ProductoContext";
import X from "../assets/X";

const FormProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();

    if (modo === "agregar") {
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }

    onCerrar();
  };

  return (
    <div aria-modal="true" role="dialog" className="w-full">
      <div className="bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
          </h3>

          <button
            type="button"
            onClick={onCerrar}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X />
          </button>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={manejarSubmit} className="space-y-5 mt-4">

          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={producto.nombre || ""}
              onChange={manejarChange}
              required
              className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Precio */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Precio</label>
            <input
              type="number"
              name="precio"
              value={producto.precio || ""}
              onChange={manejarChange}
              required
              min="0"
              step="any"
              className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Imagen */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">URL Imagen</label>
            <input
              type="text"
              name="imagen"
              value={producto.imagen || ""}
              onChange={manejarChange}
              className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              name="descripcion"
              rows="4"
              value={producto.descripcion || ""}
              onChange={manejarChange}
              required
              className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-600"
            ></textarea>
          </div>

          {/* 🔥 NUEVO CAMPO: Tipo de Producto */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Tipo</label>
            <select
              name="tipo"
              value={producto.tipo || ""}
              onChange={manejarChange}
              required
              className="border rounded-md px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-600"
            >
              <option value="">Seleccionar tipo...</option>
              <option value="capsulas">capsulas</option>
              <option value="grano">grano</option>
              <option value="accesorios">accesorios</option>
            </select>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onCerrar}
              className="px-4 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm bg-yellow-600 text-black hover:bg-yellow-500 transition"
            >
              {modo === "agregar" ? "Agregar" : "Actualizar"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default FormProducto;
