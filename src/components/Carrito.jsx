import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarProducto, cambiarCantidad, total } =
    useContext(CarritoContext);

  return (
    <section className="pt-20 px-4">
      <div className="mx-auto max-w-3xl bg-[#1c1a18] text-[#f5e9d5] shadow-xl rounded-2xl p-6">
        
        {/* Título */}
        <header className="text-center">
          <h1 className="text-3xl font-bold">Tu Carrito</h1>
        </header>

        {/* Si está vacío */}
        {carrito.length === 0 && (
          <p className="text-center text-[#c8b79c] mt-6">
            Tu carrito está vacío ☕
          </p>
        )}

        {/* Lista */}
        <ul className="mt-8 space-y-5">
          {carrito.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border-b border-[#3b3733] pb-4">

              {/* Imagen */}
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-20 h-20 rounded-md object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.nombre}</h3>
                <p className="text-sm text-[#d4a574]">
                  ${item.precio} c/u
                </p>

                {/* Cantidad */}
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad}
                    onChange={(e) =>
                      cambiarCantidad(item.id, Number(e.target.value))
                    }
                    className="w-14 bg-[#2a2724] border border-[#3b3733] text-center text-white rounded-md"
                  />
                  <span className="text-sm">
                    Subtotal:{" "}
                    <strong className="text-[#d4a574]">
                      ${item.precio * item.cantidad}
                    </strong>
                  </span>
                </div>
              </div>

              {/* Eliminar */}
              <button
                onClick={() => eliminarProducto(item.id)}
                className="text-red-400 hover:text-red-600 transition"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {/* Total */}
        {carrito.length > 0 && (
          <div className="mt-10 border-t border-[#3b3733] pt-6">
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span className="text-[#d4a574]">${total}</span>
            </div>

            <button className="mt-6 w-full bg-[#d4a574] hover:bg-[#c28c52] text-black font-semibold py-3 rounded-xl transition">
              Finalizar Compra
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Carrito;
