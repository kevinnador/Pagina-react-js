import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const ProductoCard = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CarritoContext);

    // Badge inteligente
    const getBadge = () => {
        if (producto.precio > 19000) return { text: "Top", color: "bg-purple-600" };
        if (producto.tipo === "granos") return { text: "Especialidad", color: "bg-green-600" };
        if (producto.tipo === "capsulas") return { text: "Express", color: "bg-blue-600" };
        return { text: "Nuevo", color: "bg-yellow-600 text-black" };
    };

    const badge = getBadge();

    return (
        <article
        className="
            bg-[#1c1a18]
            border border-[#3b3733]
            rounded-xl shadow-lg overflow-hidden
            hover:shadow-2xl hover:scale-[1.03]
            transition-all duration-300 group
        "
        >
        {/* Imagen */}
        <div className="relative w-full h-56 overflow-hidden">
            <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Badge */}
            <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${badge.color}`}
            >
            {badge.text}
            </span>

            {/* Favorito */}
            <button
            className="
                absolute top-3 right-3 w-9 h-9 rounded-full
                bg-black/40 backdrop-blur-sm flex items-center justify-center
                text-white hover:bg-black/60 transition
            "
            >
            ❤️
            </button>
        </div>

        {/* Contenido */}
        <div className="p-4 flex flex-col gap-3">

            <h2 className="text-xl font-bold text-[#f5e9d5] group-hover:text-yellow-500 transition">
            {producto.nombre}
            </h2>

            <p className="text-sm text-gray-300 line-clamp-2">
            {producto.descripcion}
            </p>

            <span className="text-xs px-2 py-1 bg-[#2a2724] border border-[#3b3733] rounded-full text-gray-300 w-fit">
            {producto.tipo}
            </span>

            <p className="text-2xl font-extrabold text-yellow-500">
            ${producto.precio}
            </p>

            <div className="flex gap-3 mt-2">

            <Link
                to={`/producto/${producto.id}`}
                className="
                flex-1 text-center bg-[#3b3733] text-[#f5e9d5]
                font-semibold py-2 rounded-lg hover:bg-[#4a4541] transition
                "
            >
                Ver detalle
            </Link>

            <button
                onClick={() => agregarAlCarrito(producto)}
                className="
                flex-1 bg-yellow-500 text-black font-semibold
                py-2 rounded-lg hover:bg-yellow-400 transition
                "
            >
                Agregar
            </button>

            </div>
        </div>
        </article>
    );
};

export default ProductoCard;
