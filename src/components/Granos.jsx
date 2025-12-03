import { Link } from "react-router-dom";
import { useProductosContext } from "../context/ProductoContext";
import BotonAgregarCarrito from "./BotonAgregarCarrito";

const formatPrice = (precio) =>
    new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
    }).format(precio);

    const Granos = () => {
    const { productos, cargando, error } = useProductosContext();
    if (cargando)
        return <p className="text-center text-white">Cargando cafés...</p>;
    if (error) return <p className="text-red-400 text-center">{error}</p>;

    // ✔ FILTRO ARREGLADO: acepta "grano" o "granos"
    const granos = productos.filter((p) =>
        p.tipo?.toLowerCase().startsWith("grano")
    );

    return (
        <section className="w-full bg-[#1c1a18] py-20 px-6">
        <div className="max-w-7xl mx-auto">

            {/* ✔ TITULO */}
            <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow">
                Café en Grano
            </h2>
            <p className="text-neutral-300 mt-2">
                Intensidad, aroma y frescura en cada paquete.
            </p>
            </header>

            {/* ✔ GRID RESPONSIVE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {granos.map((producto) => (
                <div
                key={producto.id}
                className="
                    bg-[#2a2724] rounded-2xl border border-[#3b3733] shadow-xl
                    overflow-hidden group hover:-translate-y-2 hover:shadow-2xl
                    transition-transform duration-300
                "
                >
                <Link to={`/productos/${producto.id}`}>
                    <div className="relative w-full aspect-square overflow-hidden">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="
                        w-full h-full object-cover rounded-2xl
                        transition-transform duration-300
                        group-hover:scale-105
                        "
                    />

                    <span
                        className="
                        absolute top-3 left-3 bg-black/70 backdrop-blur
                        text-white text-xs font-semibold px-3 py-1 rounded-full
                        "
                    >
                        Grano
                    </span>
                    </div>
                </Link>

                {/* ✔ CONTENIDO */}
                <div className="p-5 flex flex-col gap-3 text-white">
                    <h3 className="text-xl font-bold leading-tight">
                    {producto.nombre}
                    </h3>

                    <p className="text-2xl font-bold text-[#d4a574]">
                    {formatPrice(producto.precio)}
                    </p>

                    <p className="text-sm text-neutral-200 line-clamp-2">
                    {producto.descripcion}
                    </p>

                    {/* ✔ BOTONES */}
                    <div className="flex gap-3 mt-4">
                    <Link
                        to={`/productos/${producto.id}`}
                        className="
                        flex-1 py-2 rounded-xl bg-[#d4a574] hover:bg-[#c28c52]
                        text-black text-sm font-semibold text-center transition
                        "
                    >
                        Detalle
                    </Link>

                    <BotonAgregarCarrito producto={producto} />

                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

export default Granos;
