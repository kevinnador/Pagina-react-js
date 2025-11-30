import { Link } from "react-router-dom";
import { useProductosContext } from "../context/ProductoContext";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const ColeccionCapsulas = () => {
    const { productos, cargando, error } = useProductosContext();
    const { agregarAlCarrito } = useContext(CarritoContext);

    if (cargando) return <p className="text-center text-[#f5e9d5]">Cargando cápsulas...</p>;
    if (error) return <p className="text-red-400 text-center">{error}</p>;

    // Filtrar solo productos tipo "capsula"
    const capsulas = productos.filter(
        (p) => p.tipo?.toLowerCase() === "capsula"
    );

    // Mostrar solo 4
    const capsulasMostradas = capsulas.slice(0, 4);

    return (
        <section className="w-full bg-[#1c1a18] py-16 px-6">
        <div className="max-w-7xl mx-auto">

            {/* Título */}
            <header className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#f5e9d5] drop-shadow-md">
                Colección de Cápsulas
            </h2>
            <p className="text-[#c8b79c] mt-3 text-lg">
                Aromas intensos, tostado perfecto y el equilibrio ideal para tu día.
            </p>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {capsulasMostradas.map((producto) => (
                <div
                key={producto.id}
                className="bg-[#2a2724] rounded-2xl border border-[#3b3733] shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition"
                >
                {/* Imagen */}
                <Link to={`/productos/${producto.id}`}>
                    <div className="overflow-hidden">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    </div>
                </Link>

                {/* Información */}
                <div className="p-5">
                    <h3 className="text-[#f2e6d8] text-lg font-semibold line-clamp-2">
                    {producto.nombre}
                    </h3>

                    <p className="text-[#d4a574] text-xl font-bold mt-2">
                    ${producto.precio}
                    </p>

                    {/* Botones */}
                    <div className="flex gap-3 mt-5">

                    <Link
                        to={`/productos/${producto.id}`}
                        className="w-1/2 py-2 text-center bg-[#d4a574] text-black font-semibold rounded-lg hover:bg-[#c28c52] transition"
                    >
                        Detalle
                    </Link>

                    <button
                        onClick={() => agregarAlCarrito(producto)}
                        className="w-1/2 py-2 text-center border border-[#d4a574] text-[#f5e9d5] rounded-lg hover:bg-[#3b3733] transition font-semibold"
                    >
                        Agregar
                    </button>

                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

export default ColeccionCapsulas;
