import { useState } from "react";
import { Link } from "react-router-dom";

export default function SliderCafeteria() {
    const slides = [
        {
        imagen: "https://i.pinimg.com/1200x/ee/10/a5/ee10a5c6589656649097ffbbf102e7ec.jpg",
        titulo: "Café en Grano Premium",
        descripcion: "Descubrí sabores intensos, tostado artesanal y la frescura del café de especialidad.",
        link: "/productos/granos",
        boton: "Ver granos"
        },
        {
        imagen: "https://i.pinimg.com/736x/47/d9/92/47d99261b4c56e833e3e248dc4c5e0d5.jpg",
        titulo: "Cápsulas Compatibles",
        descripcion: "Comodidad y sabor en cada cápsula. Ideal para tus mañanas.",
        link: "/productos/capsulas",
        boton: "Ver cápsulas"
        },
        {
        imagen: "https://i.pinimg.com/736x/91/77/a4/9177a43f25bece6667212d2bd694a693.jpg",
        titulo: "Accesorios de Barista",
        descripcion: "Elegí herramientas de calidad premium para preparar el café perfecto.",
        link: "/productos/accesorios",
        boton: "Ver accesorios"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="w-full max-w-full overflow-hidden">

        <div className="relative w-full max-w-full h-[28rem] md:h-[calc(100vh-120px)] bg-[#1c1a17] shadow-xl overflow-hidden">

            {/* Slides wrapper */}
            <div
            className="flex transition-transform duration-700 max-w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {slides.map((slide, i) => (
                <div
                key={i}
                className="flex-shrink-0 w-full max-w-full h-[28rem] md:h-[calc(100vh-120px)] bg-center bg-cover overflow-hidden"
                style={{ backgroundImage: `url(${slide.imagen})` }}
                >
                {/* Overlay */}
                <div className="flex flex-col justify-center items-center h-full bg-black/40 backdrop-blur-sm px-6 text-center">

                    <h2 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-xl">
                    {slide.titulo}
                    </h2>

                    <p className="mt-3 text-[#e5d5c2] text-base md:text-2xl max-w-xl leading-relaxed">
                    {slide.descripcion}
                    </p>

                    <Link
                    to={slide.link}
                    className="mt-6 py-3 px-7 rounded-xl bg-[#d4a574] hover:bg-[#c28c52] text-black font-semibold text-lg shadow-lg transition"
                    >
                    {slide.boton}
                    </Link>

                </div>
                </div>
            ))}
            </div>

            {/* Flecha izquierda */}
            <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full
                        flex items-center justify-center text-white text-3xl
                        bg-black/40 hover:bg-black/60 backdrop-blur-md transition"
            >
            ‹
            </button>

            {/* Flecha derecha */}
            <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full
                        flex items-center justify-center text-white text-3xl
                        bg-black/40 hover:bg-black/60 backdrop-blur-md transition"
            >
            ›
            </button>

        </div>
        </div>
    );
}
