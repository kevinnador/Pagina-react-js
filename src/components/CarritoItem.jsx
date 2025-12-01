import { memo } from "react";

const formatearPrecio = (valor) =>
    new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
    }).format(valor);

    const CarritoItem = ({ item, onEliminar, onCambiarCantidad }) => {
    const subtotal = item.precio * item.cantidad;

    return (
        <li className="flex gap-6 border-b pb-6 last:border-none group transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
        {/* IMAGEN */}
        <div className="relative">
            <img
            src={item.imagen}
            alt={item.nombre}
            className="w-32 h-32 rounded-xl object-cover shadow-md"
            />
            <span className="absolute -top-2 -left-2 bg-black/80 text-[11px] text-white px-2 py-0.5 rounded-full">
            x{item.cantidad}
            </span>
        </div>

        {/* INFO */}
        <div className="flex-1 flex flex-col justify-between">
            <div>
            <h2 className="text-lg font-semibold text-neutral-900">
                {item.nombre}
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
                {formatearPrecio(item.precio)} c/u
            </p>
            </div>

            {/* CONTROLES DE CANTIDAD */}
            <div className="flex items-center gap-3 mt-3">
            <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition"
                onClick={() =>
                onCambiarCantidad(item.id, Math.max(1, item.cantidad - 1))
                }
            >
                -
            </button>

            <span className="text-lg font-medium w-6 text-center">
                {item.cantidad}
            </span>

            <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-black text-white transition"
                onClick={() => onCambiarCantidad(item.id, item.cantidad + 1)}
            >
                +
            </button>

            <span className="ml-4 text-sm text-neutral-600">
                Subtotal:{" "}
                <strong className="text-neutral-900">
                {formatearPrecio(subtotal)}
                </strong>
            </span>
            </div>
        </div>

        {/* ELIMINAR */}
        <button
            onClick={() => onEliminar(item.id)}
            className="self-start text-red-500 hover:text-red-700 text-xl font-bold transition"
            aria-label="Eliminar del carrito"
        >
            ×
        </button>
        </li>
    );
};

export default memo(CarritoItem);
