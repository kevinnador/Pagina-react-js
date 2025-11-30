const Footer = () => {
  return (
    <footer className="w-full bg-[#1b1917] py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-[85rem] mx-auto text-center">

        {/* Marca */}
        <h2 className="text-2xl font-bold !text-white tracking-wide">
          CoffeeCraft
        </h2>

        {/* Texto secundario */}
        <p className="mt-2 text-sm !text-gray-300">
          Café de especialidad – Tostado fresco, origen real.
        </p>

        <p className="mt-1 text-sm !text-gray-400">
          © {new Date().getFullYear()} CoffeeCraft. Todos los derechos reservados.
        </p>

        {/* Redes Sociales */}
        <div className="mt-6 flex justify-center gap-3">

          {/* Instagram */}
          <a
            href="#"
            className="size-9 flex items-center justify-center rounded-full bg-[#2a2724] text-white hover:bg-[#3a3632] transition"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm10 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="size-9 flex items-center justify-center rounded-full bg-[#2a2724] text-white hover:bg-[#3a3632] transition"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="size-9 flex items-center justify-center rounded-full bg-[#2a2724] text-white hover:bg-[#3a3632] transition"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.2 11.5.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.3 11.3 0 0 1 6.2 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.3 3 .2 3.3.8.9 1.3 2 1.3 3.5 0 4.9-2.9 6-5.7 6.3.5.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A12.1 12.1 0 0 0 24 12.7 12 12 0 0 0 12 .5z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
