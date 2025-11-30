import { Link } from "react-router-dom";
import { useProductosContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

const Granos = () => {
    const { productos, cargando, error } = useProductosContext();
    const { agregarAlCarrito } = useContext(CarritoContext);

    if (cargando) return <p className="text-center text-white">Cargando cafés...</p>;
    if (error) return <p className="text-red-400 text-center">{error}</p>;

    // 📌 Filtrar solo productos de tipo "grano"
    const granos = productos.filter((p) => p.tipo?.toLowerCase() === "grano");

    return (
        <section className="w-full bg-[#1c1a18] py-16 px-6">
        <div className="max-w-7xl mx-auto">

            {/* Título */}
            <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f5e9d5] drop-shadow-md tracking-wide">
                Café en Grano
            </h2>
            <p className="text-[#c8b79c] mt-2">
                Intensidad, aroma y frescura en cada paquete.
            </p>
            </header>

            {/* GRID DE PRODUCTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {granos.map((producto) => (
                <div
                key={producto.id}
                className="group flex flex-col bg-[#2a2724] p-5 rounded-2xl shadow-xl border border-[#3b3733] hover:-translate-y-1 hover:shadow-2xl transition"
                >
                {/* Imagen */}
                <Link to={`/productos/${producto.id}`}>
                    <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-300"
                    />
                    </div>
                </Link>

                {/* Info */}
                <div className="pt-4 text-left">
                    <h3 className="font-semibold text-lg text-[#f2e6d8] line-clamp-2">
                    {producto.nombre}
                    </h3>
                    <p className="mt-2 font-bold text-[#d4a574] text-xl">
                    ${producto.precio}
                    </p>
                </div>

                {/* Botones */}
                <div className="mt-auto flex gap-3 pt-4">
                    <Link
                    to={`/productos/${producto.id}`}
                    className="flex-1 py-2 rounded-xl bg-[#d4a574] hover:bg-[#c28c52] text-black text-sm font-semibold text-center transition"
                    >
                    Detalle
                    </Link>

                    <button
                    onClick={() => agregarAlCarrito(producto)}
                    className="flex-1 py-2 rounded-xl border border-[#d4a574] text-[#f5e9d5] hover:bg-[#3b3733] transition font-semibold text-sm"
                    >
                    Agregar
                    </button>
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

export default Granos;
