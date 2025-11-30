import { useState } from "react";

export default function SliderCafeteria() {
    const imagenes = [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?q=80&w=1920&auto=format&fit=crop",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
        prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };

    return (
        <div className="w-full overflow-hidden">
        <div className="relative w-full h-[32rem] md:h-[calc(100vh-120px)] bg-[#1c1a17] shadow-xl">

            {/* Slides */}
            <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {imagenes.map((url, i) => (
                <div
                key={i}
                className="flex-shrink-0 w-full h-[32rem] md:h-[calc(100vh-120px)] bg-center bg-cover"
                style={{ backgroundImage: `url(${url})` }}
                >
                {/* Overlay cálido */}
                <div className="flex flex-col justify-center items-center h-full bg-black/40 backdrop-blur-sm px-6 text-center">
                    <span className="text-4xl md:text-6xl font-extrabold text-[#f2e6d8] drop-shadow-xl">
                    Café en Grano Premium
                    </span>

                    <p className="mt-4 text-[#e5d5c2] text-lg md:text-2xl max-w-2xl leading-relaxed">
                    Descubrí sabores intensos, tostado artesanal y la frescura que
                    solo un café de especialidad puede ofrecer.
                    </p>

                    <button className="mt-6 py-3 px-7 rounded-xl bg-[#d4a574] hover:bg-[#c28c52] text-black font-semibold text-lg shadow-lg transition">
                    Ver productos
                    </button>
                </div>
                </div>
            ))}
            </div>

            {/* Flecha izquierda */}
            <button
            onClick={prevSlide}
            className="absolute inset-y-0 left-0 flex items-center justify-center w-16 text-[#f2e6d8] bg-black/20 hover:bg-black/40 backdrop-blur-md text-5xl transition"
            >
            ‹
            </button>

            {/* Flecha derecha */}
            <button
            onClick={nextSlide}
            className="absolute inset-y-0 right-0 flex items-center justify-center w-16 text-[#f2e6d8] bg-black/20 hover:bg-black/40 backdrop-blur-md text-5xl transition"
            >
            ›
            </button>
        </div>
        </div>
    );
}

