import { useProductosContext } from "../context/ProductoContext";
import ProductoCard from "../components/ProductoCard";

// BANNERS POR CATEGORÍA
const bannerPorCategoria = {
    granos: {
        titulo: "Café en Granos",
        descripcion: "Descubrí aromas intensos y sabores auténticos.",
        imagen:
        "https://i.pinimg.com/1200x/6d/c5/3f/6dc53fe5237d33aaf32342279fdb5170.jpg",
    },
    capsulas: {
        titulo: "Cápsulas",
        descripcion: "Café perfecto al instante, sin complicaciones.",
        imagen:
        "https://i.pinimg.com/1200x/4a/0c/fc/4a0cfcb5882ce421c4404b96d5abc384.jpg",
    },
    accesorios: {
        titulo: "Accesorios",
        descripcion: "Todo lo que necesitás para elevar tu experiencia cafetera.",
        imagen:
        "https://i.pinimg.com/1200x/2b/5f/43/2b5f43b39083af8dffc4b6f0dcebc4c8.jpg",
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
