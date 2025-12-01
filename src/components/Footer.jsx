const Footer = () => {
  return (
    <footer className="w-full bg-[#151311] pt-16 pb-10 px-6 border-t border-[#2a2724]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">

        {/* Marca */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-white">
            CoffeeCraft
          </h2>

          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Café de especialidad, tostado fresco y seleccionado en origen.
            Una experiencia premium en cada taza.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Navegación
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="/inicio" className="hover:text-yellow-500 transition">Inicio</a></li>
            <li><a href="/productos/granos" className="hover:text-yellow-500 transition">Granos</a></li>
            <li><a href="/productos/capsulas" className="hover:text-yellow-500 transition">Cápsulas</a></li>
            <li><a href="/productos/accesorios" className="hover:text-yellow-500 transition">Accesorios</a></li>
            <li><a href="/carrito" className="hover:text-yellow-500 transition">Carrito</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">
            Seguinos
          </h3>

          <div className="flex justify-center sm:justify-start w-full gap-4">

            {/* Instagram */}
            <a
              href="#"
              className="
                w-10 h-10 rounded-full bg-[#24221f] flex items-center justify-center
                text-white hover:bg-yellow-500 hover:text-black transition shadow-lg
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm10 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="
                w-10 h-10 rounded-full bg-[#24221f] flex items-center justify-center
                text-white hover:bg-yellow-500 hover:text-black transition shadow-lg
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="
                w-10 h-10 rounded-full bg-[#24221f] flex items-center justify-center
                text-white hover:bg-yellow-500 hover:text-black transition shadow-lg
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.2 11.5.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.3 11.3 0 0 1 6.2 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.3 3 .2 3.3.8.9 1.3 2 1.3 3.5 0 4.9-2.9 6-5.7 6.3.5.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A12.1 12.1 0 0 0 24 12.7 12 12 0 0 0 12 .5z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center border-t border-[#2a2724] pt-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-[#f5e9d5]">CoffeeCraft</span>.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
