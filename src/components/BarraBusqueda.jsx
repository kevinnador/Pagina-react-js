const BarraBusqueda = () => {
    return (
        <>
        {/* Hero Café */}
        <div className="relative bg-white py-20">
            <div className="max-w-4xl mx-auto text-center px-6">

            {/* Título */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3c2f25]">
                Café de Especialidad en Grano
            </h1>

            <p className="mt-4 text-lg text-[#6e5e4e]">
                Descubrí aromas únicos, tostado fresco y los mejores orígenes del mundo.
            </p>

            {/* Buscador */}
            <div className="mt-10">
                <form className="max-w-xl mx-auto">
                <div className="flex items-center gap-3 p-3 bg-[#f8f6f2] border border-[#d7d0c6] rounded-xl shadow-lg">

                    <input
                    type="text"
                    placeholder="Buscar café por origen, intensidad, variedad..."
                    className="w-full px-4 py-3 bg-transparent text-[#3c2f25] placeholder-[#9a8f81]
                                focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg"
                    />

                    <button
                    type="submit"
                    className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
                    >
                    <svg
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    </button>
                </div>
                </form>
            </div>

            {/* Categorías */}
            <div className="mt-14 flex flex-wrap justify-center gap-3">

                <button className="px-5 py-3 bg-[#f8f5ef] text-[#4a3b30] border border-[#d7d0c6] rounded-lg hover:bg-[#e9e3da] transition">
                ☕ Tostado Medio
                </button>

                <button className="px-5 py-3 bg-[#f8f5ef] text-[#4a3b30] border border-[#d7d0c6] rounded-lg hover:bg-[#e9e3da] transition">
                🌎 Orígenes
                </button>

                <button className="px-5 py-3 bg-[#f8f5ef] text-[#4a3b30] border border-[#d7d0c6] rounded-lg hover:bg-[#e9e3da] transition">
                🔥 Tostado Intenso
                </button>

                <button className="px-5 py-3 bg-[#f8f5ef] text-[#4a3b30] border border-[#d7d0c6] rounded-lg hover:bg-[#e9e3da] transition">
                🌿 Café Orgánico
                </button>

            </div>
            </div>
        </div>
        {/* End Hero Café */}
        </>
    );
};

export default BarraBusqueda;
