
const Carrito = ({productoEnCarrito, eliminarDelCarrito}) => {
    return (
<div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
    Carrito de Compras 
  </h2>

  {productoEnCarrito.length === 0 ? (
    <p className="text-gray-500 text-center">Tu carrito está vacío</p>
  ) : (
    productoEnCarrito.map((producto, index) => (
      <div
        key={producto.id || index}
        className="flex items-center justify-between border-b border-gray-200 py-4 last:border-0"
      >
        {/* Imagen + Detalles */}
        <div className="flex items-center gap-4">
          <img
            src={producto.image}
            alt={producto.title}
            className="w-20 h-20 object-contain rounded-md"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{producto.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{producto.description}</p>
            <p className="text-emerald-700 font-bold mt-1">${producto.price}</p>
          </div>
        </div>

        {/* Botón eliminar */}
        <button
          onClick={() => eliminarDelCarrito(index)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium"
        >
          Eliminar
        </button>
      </div>
    ))
  )}
</div>

    ) 
}
; export default Carrito;

