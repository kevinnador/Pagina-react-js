import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((respuesta) => respuesta.json())
      .then((dato) => {
        setProducto(dato);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al cargar la data");
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>No se encontró el producto</p>;

return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Detalle del producto
    </h2>
    <img
      src={producto.image}
      alt={producto.title}
      className="w-48 h-48 object-contain mx-auto mb-4"
    />
    <h3 className="text-xl font-medium text-gray-700 mb-2">
      {producto.title}
    </h3>
    <p className="text-gray-600 mb-4">{producto.description}</p>
    <p className="text-lg font-bold text-emerald-600">${producto.price}</p>
  </div>
);

};

export default DetalleProducto;
