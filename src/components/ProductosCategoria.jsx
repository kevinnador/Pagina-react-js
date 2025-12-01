import { useProductosContext } from "../context/ProductoContext";
import ProductoCard from "../components/ProductoCard";

// BANNERS POR CATEGORÍA
const bannerPorCategoria = {
    granos: {
        titulo: "Café en Granos",
        descripcion: "Descubrí aromas intensos y sabores auténticos.",
        imagen:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80",
    },
    capsulas: {
        titulo: "Cápsulas",
        descripcion: "Café perfecto al instante, sin complicaciones.",
        imagen:
        "https://images.unsplash.com/photo-1603386329225-868f9f94cb0e?q=80",
    },
    accesorios: {
        titulo: "Accesorios",
        descripcion: "Todo lo que necesitás para elevar tu experiencia cafetera.",
        imagen:
        "https://images.unsplash.com/photo-1541154242430-0f61f55a1c3c?q=80",
    },
    };

    const ProductosCategoria = ({ categoria, titulo }) => {
    const { cargando, error, getProductosPorTipo } = useProductosContext();

    // FILTRO DE PRODUCTOS
    const productosFiltrados = getProductosPorTipo(categoria);

    // ESTADOS
    if (cargando)
        return (
        <div className="min-h-[60vh] flex justify-center items-center text-[#f5e9d5]">
            Cargando productos...
        </div>
        );

    if (error)
        return (
        <div className="pt-24 text-center text-red-400">
            Error al cargar los productos.
        </div>
        );

    return (
        <section className="bg-[#1c1a18] min-h-screen pb-20">

        {/* BANNER */}
        <div className="relative w-full h-64 md:h-72 overflow-hidden mb-10">
            <img
            src={bannerPorCategoria[categoria]?.imagen}
            alt={categoria}
            className="w-full h-full object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5e9d5] drop-shadow-lg">
                {bannerPorCategoria[categoria]?.titulo}
            </h2>
            <p className="mt-2 text-lg text-gray-300">
                {bannerPorCategoria[categoria]?.descripcion}
            </p>
            </div>
        </div>

        {/* CONTENIDO */}
        <main className="max-w-7xl mx-auto px-4">

            {/* TÍTULO */}
            <h1 className="text-3xl font-bold text-[#f5e9d5] mb-6">
            {titulo}
            </h1>

            {/* LISTA DE PRODUCTOS */}
            {productosFiltrados.length === 0 ? (
            <p className="text-[#c8b79c] text-lg">
                No hay productos en esta categoría todavía.
            </p>
            ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {productosFiltrados.map((producto) => (
                    <ProductoCard key={producto.id} producto={producto} />
                ))}
            </div>
            )}
        </main>
        </section>
    );
};

export default ProductosCategoria;
